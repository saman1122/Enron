package com.saman.demoSpringAngular;

import com.saman.demoSpringAngular.enron.Dataset;
import com.saman.demoSpringAngular.enron.EmailDataset;
import com.saman.demoSpringAngular.entity.Email;
import com.saman.demoSpringAngular.repository.EmailRepository;
import info.debatty.java.datasets.examples.DBLP;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoSpringAngularApplication implements CommandLineRunner {

    @Autowired
    private EmailRepository emailRepository;

    public static void main(String[] args) {
        SpringApplication.run(DemoSpringAngularApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        emailRepository.deleteAll();

        Dataset enronDataset = new Dataset(DBLP.class.getClassLoader().getResource("enron").getFile());

        for(EmailDataset email : enronDataset ){
            Email emailTmp = new Email(
                    email.getMessageID(),
                    email.getRaw(),
                    email.getMailbox(),
                    email.getUser(),
                    email.getFrom(),
                    email.getTo(),
                    email.getCc(),
                    email.getBcc(),
                    email.getSubject(),
                    email.getContent()
            );

            emailRepository.save(emailTmp);
        }

        // fetch all customers
        System.out.println("Customers found with findAll():");
        System.out.println("-------------------------------");
        for (Email email : emailRepository.findAll()) {
            System.out.println(email);
        }
        System.out.println();

        // fetch an individual customer
        System.out.println("Customer found with findByFirstName('Alice'):");
        System.out.println("--------------------------------");

        emailRepository.findByFrom("phillip.allen@enron.com").forEach(System.out::println);

    }
}
