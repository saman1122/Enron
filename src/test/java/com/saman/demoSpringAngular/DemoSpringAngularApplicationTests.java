package com.saman.demoSpringAngular;

import static org.assertj.core.api.Assertions.assertThat;

import com.saman.demoSpringAngular.domain.SearchResult;
import com.saman.demoSpringAngular.entity.Email;
import com.saman.demoSpringAngular.repository.EmailRepository;
import com.saman.demoSpringAngular.service.EmailService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DemoSpringAngularApplicationTests {

    @Autowired
    EmailRepository repository;

    @Autowired
    EmailService service;

    @Before
    public void contextLoads() {
        assertThat(repository).isNotNull();
        assertThat(service).isNotNull();
    }

    @Test
    public void insertDelete() {
        String messageId = "mesageIdTest";
        String content = "contentTest";
        String from = "senderTest";

        Email email = new Email();
        email.messageId = messageId;
        email.content = content;
        email.from = from;

        Email saved = repository.save(email);

        assertThat(saved.toString()).isEqualTo(email.toString());
        repository.delete(email);
        assertThat(service.getOneById(messageId)).isNull();
    }

    @Test
    public void findOne() {
        String existingId = "<32112101.1075848347556.JavaMail.evans@thyme>";
        assertThat(service.getOneById("notExistID")).isNull();
        assertThat(service.getOneById(existingId).messageId).isEqualTo(existingId);
    }

    @Test
    public void search() {
        String term = "regards";
        String emptyString = "";
        Pageable pageable = PageRequest.of(0, 20);
        Page<SearchResult> results = service.getEmailFindByTerm(term, pageable);

        assertThat(results.getTotalElements()).isGreaterThan(0L);
        assertThat(service.getEmailFindByTerm(emptyString, pageable).getTotalElements()).isEqualTo(0L);
    }

    @Test
    public void findAll() {
        Pageable pageable = PageRequest.of(0,20);
        assertThat(service.listAllByPage(pageable).getTotalElements()).isGreaterThan(0L);
    }

}
