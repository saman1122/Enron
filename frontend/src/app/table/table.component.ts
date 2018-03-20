import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { EmaildetailComponent } from '../emaildetail/emaildetail.component';
import { EmailService } from '../email.service';
import {Observable} from 'rxjs/Rx';
import {Email} from '../app.email.class';
import {Router} from "@angular/router";
import { Pageable } from '../app.pageable.class';
import { Searchresult } from '../app.search-result.class';

@Component({
  selector: 'app-table',
  providers: [ EmailService ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public searchresults : Searchresult[] = [];
  public pages : Pageable;
  public totalPages : number=0;
  public totalElements : number=0;
  public size : number=0;
  emailDetailComponent: MatDialogRef<EmaildetailComponent>;
  public searchTerm: String = '';
  public search:String;

  constructor(public dialog: MatDialog, private service: EmailService, private router: Router ) {  this.search = '';}

  ngOnInit() {
    this.service.getAllEmails()
    .subscribe( data => {
      this.searchresults = data.content;
      this.pages = data.pageable;
      this.totalPages = data.totalPages;
      this.totalElements = data.totalElements;
      this.size = data.size;    
    });
  }
  searchClick(value: String) {
    this.search = value;
    this.router.navigate(['emaildetail']);
  }
  afficher(email){
    let dialogRef = this.dialog.open(EmaildetailComponent, {
      data: { email }
    });
 }
 gopage(page){
  this.service.getAllEmailsPage(new Pageable(0,page-1,20))
  .subscribe( data => {
    this.searchresults = data.content;
    this.pages = data.pageable;
    this.totalPages = data.totalPages;
    this.totalElements = data.totalElements;
    this.size = data.size;
  });

}

}