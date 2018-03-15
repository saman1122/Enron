import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-emaildetail',
  templateUrl: './emaildetail.component.html',
  styleUrls: ['./emaildetail.component.css']
})
export class EmaildetailComponent implements OnInit {
  public email : Email;
  constructor(
    public dialogRef: MatDialogRef<EmaildetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { this.email = data.email;
    console.log(this.email.messageId);}

  ngOnInit() {
  }

}

class Email {
  constructor(
    public messageId : String ='',
    public raw : String ='',
    public mailbox : String ='',
    public user : String ='',
    public from : String ='',
    public to : String[] =[],
    public cc : String[] =[],
    public bcc : String[] =[],
    public subject : String ='',
    public content : String ='',
    public date : String =''
  ) { }

}


