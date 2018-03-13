package com.saman.demoSpringAngular;

import com.saman.demoSpringAngular.enron.Dataset;
import com.saman.demoSpringAngular.enron.Email;
import info.debatty.java.datasets.examples.DBLP;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoSpringAngularApplication {

    public static void main(String[] args) {
		Dataset enronDataset = new Dataset(DBLP.class.getClassLoader().getResource("enron").getFile());

		for(Email email : enronDataset ){
			try {
				System.out.println(email.getFrom());
			} catch (Exception e) {
				e.printStackTrace();
			}
		}

        SpringApplication.run(DemoSpringAngularApplication.class, args);
    }
}
