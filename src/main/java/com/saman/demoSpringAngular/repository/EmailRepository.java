package com.saman.demoSpringAngular.repository;

import com.saman.demoSpringAngular.entity.Email;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface EmailRepository extends PagingAndSortingRepository<Email,String> {
    public Email findByMessageId(String messageId);
    public List<Email> findByFrom(String from);
    public List<Email> findByTo(String to);
}
