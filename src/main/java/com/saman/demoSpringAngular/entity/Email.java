package com.saman.demoSpringAngular.entity;

import org.springframework.data.annotation.Id;

import java.util.List;

public class Email {
    @Id
    public String messageId;
    public String raw;
    public String mailbox;
    public String user;
    public String from;
    public List<String> to;
    public List<String> cc;
    public List<String> bcc;
    public String subject;
    public String content;

    public Email() {}

    public Email(String messageId, String raw, String mailbox, String user, String from, List<String> to, List<String> cc, List<String> bcc, String subject, String content) {
        this.messageId = messageId;
        this.raw = raw;
        this.mailbox = mailbox;
        this.user = user;
        this.from = from;
        this.to = to;
        this.cc = cc;
        this.bcc = bcc;
        this.subject = subject;
        this.content = content;
    }

    @Override
    public String toString() {
        return "Email{" +
                "messageId='" + messageId + '\'' +
                ", raw='" + raw + '\'' +
                ", mailbox='" + mailbox + '\'' +
                ", user='" + user + '\'' +
                ", from='" + from + '\'' +
                ", to=" + to +
                ", cc=" + cc +
                ", bcc=" + bcc +
                ", subject='" + subject + '\'' +
                ", content='" + content + '\'' +
                '}';
    }
}
