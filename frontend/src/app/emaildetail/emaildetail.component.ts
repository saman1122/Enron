import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Email} from '../app.email.class';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-emaildetail',
  templateUrl: './emaildetail.component.html',
  styleUrls: ['./emaildetail.component.css']
})
export class EmaildetailComponent implements OnInit {
  public email : Email;
  constructor(private router: Router, private route: ActivatedRoute){}
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      //this.email.messageId = params['id'];
    })
  }
}


