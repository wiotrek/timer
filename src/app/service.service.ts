import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    protected http: HttpClient,
  ) {
    console.log(this.isLogIn);
  }

  public isLogIn: boolean = this.isExistToken();
  public allTimes = [];

  protected backend = 'http://127.0.0.1:8000';
  public localhost = 'http://localhost:4200/';

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

}
