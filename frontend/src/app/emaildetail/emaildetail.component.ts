import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Email} from '../app.email.class';

@Component({
  selector: 'app-emaildetail',
  templateUrl: './emaildetail.component.html',
  styleUrls: ['./emaildetail.component.css']
})
export class EmaildetailComponent implements OnInit {
  public email : Email;
  constructor(
    public dialogRef: MatDialogRef<EmaildetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { this.email = data.email; }

  ngOnInit() {
  }

}


