import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule,HttpHeaders} from '@angular/common/http';
import {login} from './login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpclient: HttpClient) { }
  getregister()
  {
    return this.httpclient.get<any>('http://localhost:3000/api/login')

  }
  // add registration details
  addregister(newlogin:any)
  {
    var headers=new HttpHeaders();
    headers.append('login-Type','application/json');
    return this.httpclient.post<any>('http://localhost:3000/api/login',newlogin,{headers:headers})
  }
}
