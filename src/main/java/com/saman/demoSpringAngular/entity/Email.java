package com.saman.demoSpringAngular.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

import java.util.Date;
import java.util.List;

@Document(indexName = "email")
public class Email {
    @Id
    public String messageId;
    public String mailbox;
    public String user;
    public String from;
    public List<String> to;
    public List<String> cc;
    public List<String> bcc;
    public String subject;
    public String content;
    public Date date;

    public Email() {
        this.date = new Date();
    }

    public Email(String messageId, String mailbox, String user, String from, List<String> to, List<String> cc, List<String> bcc, String subject, String content, Date date) {
        this.messageId = messageId;
        this.mailbox = mailbox;
        this.user = user;
        this.from = from;
        this.to = to;
        this.cc = cc;
        this.bcc = bcc;
        this.subject = subject;
        this.content = content;
        this.date = date;
    }

    @Override
    public String toString() {
        return "Email{" +
                "messageId='" + messageId + '\'' +
                ", mailbox='" + mailbox + '\'' +
                ", user='" + user + '\'' +
                ", from='" + from + '\'' +
                ", to=" + to +
                ", cc=" + cc +
                ", bcc=" + bcc +
                ", subject='" + subject + '\'' +
                ", content='" + content + '\'' +
                ", date='" + date.toString() + '\'' +
                '}';
    }
}
