import { Component, OnInit, Inject } from '@angular/core';
import { Email } from '../app.email.class';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-emaildetail',
  providers: [EmailService],
  templateUrl: './emaildetail.component.html',
  styleUrls: ['./emaildetail.component.css']
})
export class EmaildetailComponent implements OnInit {
  public email: Email;
  public dataLoaded: boolean;
  public term: string;

  constructor(private route: ActivatedRoute, private service: EmailService) {
    this.dataLoaded = false;
    this.term = '';
  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.term = this.route.snapshot.queryParams.term || '';

    this.service.getEmailById(id)
      .subscribe(data => {
        this.email = data;
        this.dataLoaded = true;
      });
  }
}


