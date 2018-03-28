package com.saman.demoSpringAngular.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.saman.demoSpringAngular.domain.SearchResult;
import com.saman.demoSpringAngular.entity.Email;
import com.saman.demoSpringAngular.repository.EmailRepository;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.index.query.MultiMatchQueryBuilder;
import org.elasticsearch.search.SearchHit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.data.elasticsearch.core.ElasticsearchTemplate;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.io.IOException;
import java.util.*;

@Service
public class EmailService {

    @Autowired
    EmailRepository emailRepository;
    @Autowired
    ElasticsearchTemplate template;

    public Page<SearchResult> getEmailFindByTerm(String term, Pageable pageable) {
        List<SearchResult> retour = new ArrayList<>();
        ObjectMapper objectMapper = new ObjectMapper();
        SearchResponse searchResponse = template.getClient().prepareSearch("email")
                .setQuery(new MultiMatchQueryBuilder(term,"content","from","to","cc","bcc","mailbox","messageId","user","subject"))
                .setFrom(pageable.getPageNumber()*pageable.getPageSize()).setSize(pageable.getPageSize()).setExplain(true)
                .execute()
                .actionGet();

        for(SearchHit hit : searchResponse.getHits()){
            try {
                String source = hit.getSourceAsString();
                Email email = objectMapper.readValue(source,Email.class);
                Integer occurencesNumber = StringUtils.countOccurrencesOf(email.toString().toLowerCase(),term.toLowerCase());
                float score = hit.getExplanation().getValue();
                retour.add(new SearchResult(email,occurencesNumber,score));
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        return new PageImpl<>(retour,pageable,searchResponse.getHits().totalHits);
    }

    public Page<Email> listAllByPage(Pageable pageable){
        Page<Email> page = emailRepository.findAll(pageable);
        return new PageImpl<>(page.getContent(),pageable,page.getTotalElements());
    }

    public Email getOneById(String id) {
        return emailRepository.findById(id).orElse(null);
    }
}
