package com.saman.demoSpringAngular.service;

import com.saman.demoSpringAngular.entity.Email;
import com.saman.demoSpringAngular.repository.EmailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmailService {

    @Autowired
    EmailRepository emailRepository;

    public List<Email> getAllEmail() {
        List<Email> retour = new ArrayList<>();
        emailRepository.findAll().forEach(retour::add);
        return retour;
    }

    public List<Email> getEmailFindByTerm(String term) {
        List<Email> retour = new ArrayList<>();
        emailRepository.findAll().forEach(retour::add);
        return  retour.stream().filter(t->
                t.to.contains(term) || t.mailbox.contains(term) || t.from.contains(term)
                || t.date.toString().contains(term) || t.subject.contains(term)
                || t.content.contains(term) || t.cc.contains(term) || t.bcc.contains(term)
                || t.user.contains(term)
        ).collect(Collectors.toList());
    }

    public Page<Email> listAllByPage(Pageable pageable){
        return emailRepository.findAll(pageable);
    }

}
