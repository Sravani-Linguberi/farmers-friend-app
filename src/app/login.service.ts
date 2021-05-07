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

// import { register } from './register';
// import { Injectable } from '@angular/core';
// import {HttpClient, HttpClientModule,HttpHeaders} from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class RegisterService {

//   constructor(private httpclient: HttpClient) { }
//   // retrieving register services
//   getregister()
//   {
//     return this.httpclient.get<any>('http://localhost:3000/api/register')

//   }
//   // add registration details
//   addregister(newregister:any)
//   {
//     var headers=new HttpHeaders();
//     headers.append('register-Type','application/json');
//     return this.httpclient.post<any>('http://localhost:3000/api/register',newregister,{headers:headers})
//   }
// }