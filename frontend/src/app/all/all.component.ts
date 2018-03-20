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
  public pages : Pageable;
  public totalPages : number=0;
  public totalElements : number=0;
  public size : number=0;

  constructor(private service: EmailService) { }

  ngOnInit() {
    this.pages = new Pageable(0,0,20);
    this.refresh();
  }
  gopage(page){
    this.pages.pageNumber = page-1;
    this.pages.offset = this.pages.pageNumber*this.pages.pageSize;
    this.refresh();
  }

  refresh(){
    this.service.getAllEmailsPage(this.pages)
    .subscribe( data => {
      this.emails = data.content;
      this.pages = data.pageable;
      this.totalPages = data.totalPages;
      this.totalElements = data.totalElements;
      this.size = data.size;
    });
  }
}