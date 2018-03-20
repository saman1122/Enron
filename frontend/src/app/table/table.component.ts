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
  public search:String;

  constructor(public dialog: MatDialog, private service: EmailService, private router: Router ) {  this.search = '';}

  ngOnInit() {
    this.pages = new Pageable(0,0,20);
  }
  searchClick(value: String) {
    this.search = value;
    this.refresh();
  }
  afficher(email){
    let dialogRef = this.dialog.open(EmaildetailComponent, {
      data: { email }
    });
 }
 gopage(page){
    this.pages.pageNumber = page-1;
    this.pages.offset = this.pages.pageNumber*this.pages.pageSize;
    this.refresh();
  }

  refresh(){
    this.service.getEmailsPage(this.pages, this.search)
    .subscribe( data => {
      this.searchresults = data.content;
      this.pages = data.pageable;
      this.totalPages = data.totalPages;
      this.totalElements = data.totalElements;
      this.size = data.size;
    });
  }
}