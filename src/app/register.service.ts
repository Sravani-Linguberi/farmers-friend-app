import { Router } from '@angular/router';
import { register } from './register';
import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
 workspace = "http://localhost:3000"
 jsonHeader = {headers: new HttpHeaders({'content-type':'application/json'})}
  constructor(private httpclient: HttpClient,private router:Router) { }
  // retrieving register services
  signIn(newLogin:any)
  {
    // return this.httpclient.post<any>(this.workspace+'/api/login',newLogin,this.jsonHeader).subscribe(
      return this.httpclient.post<any>(this.workspace+'/api/login',newLogin)
    //   .subscribe(
    //   (result:any)=>{
    //     localStorage.setItem('user_access_token',result['access_token']);
    //     localStorage.setItem('user_id',result['user_id']);
    //     this.router.navigate(['home']);
    //   }
    // )

  }
  // add registration details
  signUp(newRegister:any)
  {
    
    //return this.httpclient.post<any>(this.workspace +'/api/register' ,newRegister,this.jsonHeader)
    return this.httpclient.post<any>(this.workspace +'/api/register' ,newRegister)
  }

  getAccessToken(){
    return localStorage.getItem('token')
  }
signOut(){
  return this.httpclient.post<any>(this.workspace+'/api/signout',{},this.jsonHeader).subscribe(
    (result:any)=>{
      this.router.navigate(['login'])
    }
  )
}

authenticate(){
  return !!localStorage.getItem('token')
}

}
