package com.saman.demoSpringAngular;

import com.saman.demoSpringAngular.enron.Dataset;
import com.saman.demoSpringAngular.enron.EmailDataset;
import com.saman.demoSpringAngular.entity.Email;
import com.saman.demoSpringAngular.repository.EmailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@SpringBootApplication
public class DemoSpringAngularApplication implements CommandLineRunner {

    @Autowired
    private EmailRepository emailRepository;

    public static void main(String[] args) {
        SpringApplication.run(DemoSpringAngularApplication.class, args);
    }

    @Override
    public void run(String... args) {

        emailRepository.deleteAll();

        Dataset enronDataset = new Dataset(this.getClass().getClassLoader().getResource("enron").getFile());

        List<Email> allEmails = new ArrayList<>();
        int i = 0;
        for (EmailDataset email : enronDataset) {
            i++;
            allEmails.add(new Email(
                    email.getMessageID(),
                    email.getMailbox(),
                    email.getUser(),
                    email.getFrom(),
                    email.getTo(),
                    email.getCc(),
                    email.getBcc(),
                    email.getSubject(),
                    email.getContent(),
                    email.getDate()
            ));

            if (i == 15000) {
                emailRepository.saveAll(allEmails);
                allEmails.clear();
                i = 0;
            }
        }
        if (allEmails.size() > 0)
            emailRepository.saveAll(allEmails);
    }
}
