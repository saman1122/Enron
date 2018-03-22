import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Email } from '../app.email.class';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private router: Router, private route: ActivatedRoute, private service: EmailService) {
    this.dataLoaded = false;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.service.getEmailById(params['id'])
        .subscribe(data => {
          this.email = data;
          this.dataLoaded = true;
        });
    })
  }
}


