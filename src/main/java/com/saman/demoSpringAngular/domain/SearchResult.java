package com.saman.demoSpringAngular.domain;

import com.saman.demoSpringAngular.entity.Email;

public class SearchResult {
    public Email email;
    public Integer occurencesNumber;
    public float score;

    public SearchResult(Email email, Integer occurencesNumber, float score) {
        this.email = email;
        this.occurencesNumber = occurencesNumber;
        this.score = score;
    }
}
