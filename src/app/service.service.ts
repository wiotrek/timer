import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    protected http: HttpClient,
  ) {}

  public isLogIn: boolean = this.isExistToken();

  protected backend =  environment.apiUrl;
  public localhost = environment.localUrl;

  public token = localStorage.getItem('token');
  public userId = localStorage.getItem('id_user');

  protected httpHeaders = new HttpHeaders(
    {Authorization: `Token ${this.token}`}
  );

  public isExistToken(): boolean {
    if (localStorage.getItem('token') === null){
      return false;
    } else {
      return true;
    }
  }

  public loggingService(request: string): Observable <any> {
    return this.http.post(`${this.backend}/auth/`, request);
  }

  public getUsername(): Observable <any> {
    return this.http.get(`${this.backend}/users/${this.userId}/`,
    {headers: this.httpHeaders});
  }

  public scorePost(goal): Observable <any> {
    return this.http.post(`${this.backend}/scores/`,
    goal, {headers: this.httpHeaders});
  }

  public scoreDel(id: number): Observable <any> {
    return this.http.delete(`${this.backend}/scores/${id}/`,
    {headers: this.httpHeaders});
  }

  public scoreGet(): Observable <any> {
    return this.http.get(`${this.backend}/scores/`,
    {headers: this.httpHeaders});
  }

  public scoreBest(): Observable <any> {
    return this.http.get(`${this.backend}/best/`,
    {headers: this.httpHeaders});
  }

  public scoreWorst(): Observable <any> {
    return this.http.get(`${this.backend}/worst/`,
    {headers: this.httpHeaders});
  }
}
