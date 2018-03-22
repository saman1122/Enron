import { Component, OnInit } from '@angular/core';
import { EmaildetailComponent } from '../emaildetail/emaildetail.component';
import { EmailService } from '../email.service';
import { Observable } from 'rxjs/Rx';
import { Email } from '../app.email.class';
import { Router } from "@angular/router";
import { Pageable } from '../app.pageable.class';
import { Searchresult } from '../app.search-result.class';
import { PaginerService } from '../paginer.service';

@Component({
  selector: 'app-table',
  providers: [EmailService, PaginerService],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public searchresults: Searchresult[] = [];
  public pages: Pageable;
  public totalPages: number = 0;
  public totalElements: number = 0;
  public size: number = 0;
  public pagesToShow: Range;
  public search: String;

  constructor(private service: EmailService, private route: Router, private servicePage: PaginerService) { this.search = ''; }

  ngOnInit() {
    this.pages = new Pageable(0, 0, 20);
  }
  searchClick(value: String) {
    this.search = value;
    this.refresh();
  }

  afficher(emailId) {
    this.route.navigate(['/emaildetail'], { queryParams: { id: emailId } });
  }

  gopage(page: number) {
    if (page < 1 || page > this.totalPages) {
      return;
    }

    this.pages.pageNumber = page - 1;
    this.pages.offset = this.pages.pageNumber * this.pages.pageSize;
    this.refresh();
  }

  refresh() {
    this.service.getEmailsPage(this.pages, this.search)
      .subscribe(data => {
        this.searchresults = data.content;
        this.pages = data.pageable;
        this.totalPages = data.totalPages;
        this.totalElements = data.totalElements;
        this.size = data.size;
        this.pagesToShow = this.servicePage.getPager(this.totalElements,this.totalPages,(this.pages.pageNumber + 1),this.pages.pageSize);
      });
  }

  
}