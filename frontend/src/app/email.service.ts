import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class EmailService {

  private urlServer = 'http://localhost:8080/api';

  constructor(private http:HttpClient) { }
  
  getAllEmails(): Observable<any> {
    console.log("getAllEmails, url: " + this.urlServer + '/all');
    return this.http.get(this.urlServer + '/all');
  }

  getEmails(term): Observable<any> {
    return this.http.get(this.urlServer + '/search?term=' + term);
  }
}
