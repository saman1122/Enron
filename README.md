School project Spring Boot, Elasticsearch, MVC + Angular 5  
Requirement :  
  - install elasticsearch (5.6.8)  
  - install node.js (V9.7.1)  

Execution :  
  - git clone https://github.com/KevinJoaquim/Enron.git
  - cd Enron/  
  - mvn install  
  - cd target/  
  - demoSpringAngular-0.0.1-SNAPSHOT.jar
  
Note:  
For the first execution you need to uncomment the body of run method in main (Enron/src/main/java/com/saman/demoSpringAngular/DemoSpringAngularApplication.java) to put all emails in the database.  
  
```java
public class DemoSpringAngularApplication implements CommandLineRunner {

    .
    .
    .

    @Override
    public void run(String... args) throws Exception {

        ///*
        emailRepository.deleteAll();

        Dataset enronDataset = new Dataset(DBLP.class.getClassLoader().getResource("enron").getFile());
        .
        .
        .
        }
        emailRepository.saveAll(allEmails);
        //*/
    }
}
```
After your first run you can re-comment to improve start of application and not repeat unnecessary commands.  
  
```java
public class DemoSpringAngularApplication implements CommandLineRunner {

    .
    .
    .

    @Override
    public void run(String... args) throws Exception {

        /*
        emailRepository.deleteAll();

        Dataset enronDataset = new Dataset(DBLP.class.getClassLoader().getResource("enron").getFile());
        .
        .
        .
        }
        emailRepository.saveAll(allEmails);
        */
    }
}
```
