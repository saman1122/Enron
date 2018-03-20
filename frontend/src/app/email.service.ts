import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import { environment } from '../environments/environment'
import { Pageable } from './app.pageable.class';

@Injectable()
export class EmailService {

  private urlApi = environment.apiUrl;

  constructor(private http:HttpClient) { }
  
  getAllEmails(): Observable<any> {
    return this.http.get(this.urlApi + '/all');
  }

  getAllEmailsPage(page): Observable<any> {
    return this.http.get(this.urlApi + '/all?page='+page.pageNumber+'&size='+page.pageSize);
  }

  getEmails(term): Observable<any> {
    return this.http.get(this.urlApi + '/search?term=' + term);
  }
  
  getEmailsPage(page): Observable<any> {
    return this.http.get(this.urlApi + '/search?term=Hello&page='+page.pageNumber+'&size='+page.pageSize);
  }

}
