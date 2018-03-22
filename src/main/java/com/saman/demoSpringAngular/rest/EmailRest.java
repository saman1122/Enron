package com.saman.demoSpringAngular.rest;

import com.saman.demoSpringAngular.domain.SearchResult;
import com.saman.demoSpringAngular.entity.Email;
import com.saman.demoSpringAngular.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class EmailRest {

    @Autowired
    EmailService service;

    @RequestMapping("/search")
    public Page<SearchResult> getEmailsContentContains(@RequestParam("term") String term, Pageable pageable) {
        return service.getEmailFindByTerm(term, pageable);
    }

    @RequestMapping(value="/all",method= RequestMethod.GET)
    public Page<Email> getAllEmailsByPage(Pageable pageable) {
        return service.listAllByPage(pageable);
    }

    @RequestMapping(value="/email/{messageId}",method= RequestMethod.GET)
    public Email getOneEmailById(@PathVariable String messageId){
        return service.getOneById(messageId);
    }
}
