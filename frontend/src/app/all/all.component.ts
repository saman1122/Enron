import { Component, OnInit } from '@angular/core';
import { EmaildetailComponent } from '../emaildetail/emaildetail.component';
import { EmailService } from '../email.service';
import { Email } from '../app.email.class';
import { Pageable } from '../app.pageable.class';



@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  public emails: Email[];
  public pages: Pageable;
  public totalElements: number;
  public size: number;
  public page: number;
  public possibleSize: number[];

  constructor(private service: EmailService) {
    this.emails = [];
    this.totalElements = 0;
    this.page = 1;
    this.size = 20;
    this.pages = new Pageable(this.page - 1, this.size);
    this.possibleSize = [10, 20, 50, 100];
  }

  ngOnInit() {
    this.refresh();
  }

  gopage(page: number) {
      this.page = page;
      this.pages.pageNumber = page - 1;
      this.refresh();
  }

  sizeChange(size: number) {
    this.size = size;
    this.pages.pageSize = size;
    this.refresh();
  }

  refresh() {
    this.service.getAllEmailsPage(this.pages)
      .subscribe(data => {
        this.emails = data.content;
        this.pages = data.pageable;
        this.totalElements = data.totalElements;
        this.size = data.size;
      });
  }
}