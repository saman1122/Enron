import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import { environment } from '../environments/environment'

@Injectable()
export class EmailService {

  private urlApi = environment.apiUrl;

  constructor(private http:HttpClient) { }
  
  getAllEmails(): Observable<any> {
    return this.http.get(this.urlApi + '/all');
  }

  getEmails(term): Observable<any> {
    return this.http.get(this.urlApi + '/search?term=' + term);
  }
}
