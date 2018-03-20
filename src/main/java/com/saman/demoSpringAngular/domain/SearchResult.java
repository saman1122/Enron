package com.saman.demoSpringAngular.domain;

import com.saman.demoSpringAngular.entity.Email;

public class SearchResult {
    public Email email;
    public Integer occurencesNumber;

    public SearchResult(Email email, Integer occurencesNumber) {
        this.email = email;
        this.occurencesNumber = occurencesNumber;
    }
}
