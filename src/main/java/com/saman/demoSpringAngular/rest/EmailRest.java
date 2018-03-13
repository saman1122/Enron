package com.saman.demoSpringAngular.rest;

import com.saman.demoSpringAngular.entity.Email;
import com.saman.demoSpringAngular.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class EmailRest {

    @Autowired
    EmailService service;

    @RequestMapping("/all")
    public List<Email> getAll() {
        return service.getAllEmail();
    }

    @RequestMapping("/search")
    public List<Email> getByTerm(@RequestParam("term") String term) {
        return service.getEmailFindByTerm(term);
    }

    @RequestMapping(value="/all",method= RequestMethod.GET)
    public Page<Email> list(Pageable pageable) {
        return service.listAllByPage(pageable);
    }
}
