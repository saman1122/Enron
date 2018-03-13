package com.saman.demoSpringAngular;

import com.saman.demoSpringAngular.enron.Dataset;
import com.saman.demoSpringAngular.enron.Email;
import info.debatty.java.datasets.examples.DBLP;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoSpringAngularApplication {

    public static void main(String[] args) {
		/* Not working for the moment

		Dataset enronDataset = new Dataset(DBLP.class.getClassLoader().getResource("enron").getFile());


		for(Email email : enronDataset ){
			System.out.println(email.toString());
		}
		*/
        SpringApplication.run(DemoSpringAngularApplication.class, args);
    }
}
