package com.saman.demoSpringAngular;

import com.saman.demoSpringAngular.enron.Dataset;
import com.saman.demoSpringAngular.enron.EmailDataset;
import com.saman.demoSpringAngular.entity.Email;
import com.saman.demoSpringAngular.repository.EmailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.List;

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

            // Enron database contains about 500k mails
            // To prevent a Out Of Memory we save 15k emails at time
            if (i == 15000) {
                emailRepository.saveAll(allEmails);
                allEmails.clear();
                i = 0;
            }
        }
        // Save the remaining emails
        if (allEmails.size() > 0)
            emailRepository.saveAll(allEmails);
    }
}
