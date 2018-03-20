import { Component, OnInit } from '@angular/core';
import { EmaildetailComponent } from '../emaildetail/emaildetail.component';
import { EmailService } from '../email.service';
import {Email} from '../app.email.class';
import { Pageable } from '../app.pageable.class';


@Component({
  selector: 'app-all',
  providers: [ EmailService ],
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  public emails : Email[];

  constructor(private service: EmailService) { }

  ngOnInit() {
    this.service.getAllEmails()
    .subscribe( data => {
      this.emails = data.content;    
    });
  }
  gopage(page){
    this.service.getAllEmailsPage(new Pageable(0,page-1,20))
    .subscribe( data => {
      this.emails = data.content;
    });
  }
}
