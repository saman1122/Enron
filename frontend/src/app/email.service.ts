import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class EmailService {

  private urlApi = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllEmails(): Observable<any> {
    return this.http.get(this.urlApi + '/all');
  }

  getAllEmailsPage(page): Observable<any> {
    return this.http.get(this.urlApi + '/all?page=' + page.pageNumber + '&size=' + page.pageSize);
  }

  getEmails(term): Observable<any> {
    return this.http.get(this.urlApi + '/search?term=' + term);
  }

  getEmailsPage(page, term): Observable<any> {
    return this.http.get(this.urlApi + '/search?term=' + term + '&page=' + page.pageNumber + '&size=' + page.pageSize);
  }

  getEmailById(idEmail): Observable<any> {
    return this.http.get(this.urlApi + '/email/' + idEmail);
  }

}
