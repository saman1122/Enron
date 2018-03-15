package com.saman.demoSpringAngular.service;

import com.saman.demoSpringAngular.entity.Email;
import com.saman.demoSpringAngular.repository.EmailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class EmailService {

    @Autowired
    EmailRepository emailRepository;

    public List<Email> getAllEmail() {
        return StreamSupport.stream(emailRepository.findAll().spliterator(),false).collect(Collectors.toList());
    }

    public Page<Email> getEmailFindByTerm(String term, Pageable pageable) {
        List<Email> filtered = StreamSupport.stream(emailRepository.findAll().spliterator(),false).filter(t->
                t.to.stream().anyMatch(to -> to.contains(term)) || t.mailbox.contains(term) || t.from.contains(term)
                        || t.date.toString().contains(term) || t.subject.contains(term)
                        || t.content.contains(term) || t.cc.stream().anyMatch(to -> to.contains(term))
                        || t.bcc.stream().anyMatch(to -> to.contains(term)) || t.user.contains(term)
        ).collect(Collectors.toList());

        return new PageImpl<>(filtered,pageable,filtered.size());
    }

    public Page<Email> listAllByPage(Pageable pageable){
        return emailRepository.findAll(pageable);
    }

}
