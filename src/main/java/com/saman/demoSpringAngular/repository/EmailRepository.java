package com.saman.demoSpringAngular.repository;

import com.saman.demoSpringAngular.entity.Email;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.elasticsearch.repository.ElasticsearchCrudRepository;

import java.util.List;

public interface EmailRepository extends ElasticsearchCrudRepository<Email, String> {
}
