package com.saman.demoSpringAngular;

import com.saman.demoSpringAngular.domain.SearchResult;
import com.saman.demoSpringAngular.entity.Email;
import com.saman.demoSpringAngular.repository.EmailRepository;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.action.search.SearchType;
import org.elasticsearch.index.query.MatchQueryBuilder;
import org.elasticsearch.index.query.MultiMatchQueryBuilder;
import org.elasticsearch.search.SearchHit;
import org.elasticsearch.search.sort.ScoreSortBuilder;
import org.elasticsearch.search.sort.SortBuilder;
import org.elasticsearch.search.sort.SortOrder;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.elasticsearch.core.ElasticsearchTemplate;
import org.springframework.data.elasticsearch.core.query.Criteria;
import org.springframework.data.elasticsearch.core.query.NativeSearchQuery;
import org.springframework.data.elasticsearch.core.query.NativeSearchQueryBuilder;
import org.springframework.data.elasticsearch.core.query.SearchQuery;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.util.StringUtils;

import java.util.*;
import java.util.stream.StreamSupport;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DemoSpringAngularApplicationTests {

	@Autowired
	EmailRepository repository;

    //@Autowired
    //MongoTemplate mongoTemplate;

    @Autowired
    ElasticsearchTemplate template;

    //@Autowired
    //EmailService service;

	@Test
	public void contextLoads() {
	}

	/*
	@Test
	public void testSortScore(){
	    String term = "Regards";
        Page<Email> list = repository.findTop20000ByContentContainingOrToContainingOrFromContainingOrCcContainingOrBccContainingOrSubjectContainingAllIgnoreCase(term,term,term,term,term,term,PageRequest.of(0,20,Sort.by(Sort.Direction.DESC,"score")));
        list.getContent();
	}

	@Test
    public void mongodbTemplate(){
        String term = "Regards";
        TextCriteria criteria = TextCriteria.forDefaultLanguage().matchingAny(term);
        Query query = TextQuery.queryText(criteria)
                .sortByScore()
				.with(PageRequest.of(0,200));
	    List<Email> list = mongoTemplate.find(query,Email.class);
	    list.forEach(System.out::println);
	}

    @Test
    public void mongodbTemplate2(){
        String term = "Regards";
        TextCriteria criteria = TextCriteria.forDefaultLanguage().matchingAny(term);
        Query query = new Query(Criteria.where("content").regex(term));
        List<Email> list = mongoTemplate.find(query,Email.class);
        list.forEach(System.out::println);
    }

    @Test
    public void mongodbTemplate3(){
        List<Email> list = mongoTemplate.findAll(Email.class);
        System.out.println(list.stream().count());
    }

	@Test
    public void testService(){
	    Page<SearchResult> results1 = service.getEmailFindByTerm("Regards",PageRequest.of(0,20));
        Page<SearchResult> results2 = service.getEmailsContainingTerm("Regards",PageRequest.of(0,20));
	    long result1 = results1.getTotalElements();
	    long result2 = results2.getTotalElements();
	    System.out.println(result1 + " " + result2);

	    results1.getContent().forEach(search -> System.out.println(search.email.messageId + " " + search.occurencesNumber));
        results2.getContent().forEach(search -> System.out.println(search.email.messageId + " " + search.occurencesNumber));

        Assert.assertTrue(result1 == result2);
    }

*/

    @Test
    public void elasticSearchFindBy(){
        String term = "regards";
        Pageable pageable = PageRequest.of(0,100);

        /*
        SearchQuery searchQuery = new NativeSearchQueryBuilder()
                .withQuery(new MatchQueryBuilder("content",term))
                .withPageable(pageable)
                .withSort(new ScoreSortBuilder().order(SortOrder.DESC))
                .build();

        Page<Email> page = template.queryForPage(searchQuery,Email.class);
        System.out.println(page.getTotalElements());
*/

        SearchResponse searchResponse = template.getClient().prepareSearch("email")
                .setQuery(new MultiMatchQueryBuilder(term,"content","from"))
                .setFrom(pageable.getPageNumber()*pageable.getPageSize()).setSize(pageable.getPageSize()).setExplain(true)
                .execute()
                .actionGet();

        int hits = 0;
        for(SearchHit hit : searchResponse.getHits()){
            //System.out.println("id: " + hit.getId() + " score: " + hit.getExplanation().getValue());
            hits++;
        }
        System.out.println(searchResponse.getHits().totalHits + " " + hits);
    }

    @Test
    public void elasticSearchRepo(){
        String term = "regards";
        List<SearchResult> retour = new ArrayList<>();
        HashMap<Email,Integer> occurencesNumber = new HashMap<>();
        StreamSupport.stream(repository.findAll().spliterator(),true).filter(t->
                t.content.toLowerCase().contains(term.toLowerCase())
        ).forEach(email -> {
            occurencesNumber.put(email, StringUtils.countOccurrencesOf(email.toString().toLowerCase(),term.toLowerCase()));
        });

        occurencesNumber.entrySet()
                .parallelStream()
                .sorted(Map.Entry.<Email, Integer>comparingByValue().reversed())
                .forEachOrdered((k) -> retour.add(new SearchResult(k.getKey(),k.getValue(),0f)));
        System.out.println(retour.size());
    }


}
