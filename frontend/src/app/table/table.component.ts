import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { EmaildetailComponent } from '../emaildetail/emaildetail.component';
import { EmailService } from '../email.service';
import {Observable} from 'rxjs/Rx';
import {Email} from '../app.email.class';

@Component({
  selector: 'app-table',
  providers: [ EmailService ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public emails: Email[] = [];
  emailDetailComponent: MatDialogRef<EmaildetailComponent>;

  constructor(public dialog: MatDialog, private service: EmailService) { }

  ngOnInit() {
    this.service.getAllEmails()
    .subscribe( data => {
      console.log(data);
      this.emails = data.content;
    });
  }
  
  afficher(email){
    let dialogRef = this.dialog.open(EmaildetailComponent, {
      data: { email }
    });
 }
}