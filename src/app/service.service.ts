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
    // localStorage.removeItem('userToken');
  }
  public isLogIn: boolean = this.isExistToken();
  public allTimes = [];
  public token = localStorage.getItem('userToken');
  protected httpHeaders = new HttpHeaders(
    {Authorization: `Token ${this.token}`}
  );
  public localhost = 'http://localhost:4200/';


  loginUser(userData: string): Observable <any> {
    return this.http.post('http://127.0.0.1:8000/auth/', userData);
  }
  wszystkieFilmy(): Observable <any> {
    return this.http.get('http://127.0.0.1:8000/filmy/', {headers: this.httpHeaders});
  }
  isExistToken(): boolean {
    if (localStorage.getItem('userToken') === null ){
      return false;
    } else {
      return true;
    }
  }

}
