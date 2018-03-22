package com.saman.demoSpringAngular.repository;

import com.saman.demoSpringAngular.entity.Email;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.elasticsearch.repository.ElasticsearchCrudRepository;

import java.util.List;

public interface EmailRepository extends ElasticsearchCrudRepository<Email,String> {
    Email findByMessageId(String messageId);
    List<Email> findByFrom(String from);
    List<Email> findByTo(String to);
    Page<Email> findByContentContainingIgnoreCase(String term, Pageable pageable);
    List<Email> findByContentContainingOrToContainingOrFromContainingOrCcContainingOrBccContainingOrSubjectContainingAllIgnoreCase(String term1, String term2, String term3, String term4, String term5, String term6);
    Page<Email> findTop30000ByContentContainingOrToContainingOrFromContainingOrCcContainingOrBccContainingOrSubjectContainingAllIgnoreCase(String term1, String term2, String term3, String term4, String term5, String term6, Pageable pageable);

}
