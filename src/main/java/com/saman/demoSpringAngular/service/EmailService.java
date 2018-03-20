package com.saman.demoSpringAngular.service;

import com.saman.demoSpringAngular.entity.Email;
import com.saman.demoSpringAngular.repository.EmailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
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

    public Page<Email> getEmailsContainingTerm(String term, Pageable pageable) {
        return emailRepository.findByContentContainingOrToContainingOrFromContainingOrCcContainingOrBccContainingOrSubjectContainingAllIgnoreCase(term,term,term,term,term,term,pageable);
    }
}
