package com.saman.demoSpringAngular.service;

import com.saman.demoSpringAngular.domain.SearchResult;
import com.saman.demoSpringAngular.entity.Email;
import com.saman.demoSpringAngular.repository.EmailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class EmailService {

    @Autowired
    EmailRepository emailRepository;

    @Deprecated
    public Page<Email> getEmailFindByTerm(String term, Pageable pageable) {
        List<Email> filtered = emailRepository.findAll().parallelStream().filter(t->
                t.to.stream().anyMatch(to -> to.contains(term)) || t.mailbox.contains(term) || t.from.contains(term)
                        || t.date.toString().contains(term) || t.subject.contains(term)
                        || t.content.contains(term) || t.cc.stream().anyMatch(cc -> cc.contains(term))
                        || t.bcc.stream().anyMatch(bcc -> bcc.contains(term)) || t.user.contains(term)
        ).collect(Collectors.toList());

        return new PageImpl<>(filtered,pageable,filtered.size());
    }

    public Page<Email> listAllByPage(Pageable pageable){
        return emailRepository.findAll(pageable);
    }

    public Page<SearchResult> getEmailsContainingTerm(String term, Pageable pageable) {
        List<SearchResult> retour = new ArrayList<>();
        HashMap<Email,Integer> occurencesNumber = new HashMap<>();
        emailRepository.findTop20000ByContentContainingOrToContainingOrFromContainingOrCcContainingOrBccContainingOrSubjectContainingAllIgnoreCase(term,term,term,term,term,term)
                .forEach(email -> {
                    occurencesNumber.put(email,StringUtils.countOccurrencesOf(email.toString().toLowerCase(),term.toLowerCase()));
                });

        occurencesNumber.entrySet()
                .stream()
                .sorted(Map.Entry.<Email, Integer>comparingByValue().reversed())
                .forEach((k) -> retour.add(new SearchResult(k.getKey(),k.getValue())));


        // Create new Page
        long nbrElement = retour.size();
        int toDeleteBefore = pageable.getPageNumber()*pageable.getPageSize();
        int toDeleteAfter = (pageable.getPageNumber()+1)*pageable.getPageSize();

        return new PageImpl<>(retour.subList(toDeleteBefore, toDeleteAfter),pageable,nbrElement);
    }
}
