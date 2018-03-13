package com.saman.demoSpringAngular.service;

import com.saman.demoSpringAngular.entity.Email;
import com.saman.demoSpringAngular.repository.EmailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmailService {

    @Autowired
    EmailRepository emailRepository;

    public List<Email> getAllEmail() {
        return emailRepository.findAll();
    }

    public List<Email> getEmailFindByTerm(String term) {
        return  emailRepository.findAll().stream().filter(t-> t.toString().contains(term)).collect(Collectors.toList());
    }
}
