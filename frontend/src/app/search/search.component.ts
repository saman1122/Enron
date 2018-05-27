import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';
import { ActivatedRoute } from "@angular/router";
import { Pageable } from '../app.pageable.class';
import { Searchresult } from '../app.search-result.class';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchresults: Searchresult[];
  public pages: Pageable;
  public totalElements: number;
  public size: number;
  public page: number;
  public searchTerm: string;
  public possibleSize: number[];

  constructor(private service: EmailService, private route: ActivatedRoute) {
    this.searchresults = [];
    this.totalElements = 0;
    this.page = 1;
    this.size = 20;
    this.pages = new Pageable(this.page - 1, this.size);
    this.possibleSize = [10, 20, 50, 100];
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params.term;
      this.gopage(1)
    });
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
    this.service.getEmailsPage(this.pages, this.searchTerm)
      .subscribe(data => {
        this.searchresults = data.content;
        this.pages = data.pageable;
        this.totalElements = data.totalElements;
        this.size = data.size;
      });
  }
}