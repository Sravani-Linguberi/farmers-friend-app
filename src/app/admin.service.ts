import { HttpClient,HttpClientModule,HttpHeaders} from '@angular/common/http';
import {admin} from './admin';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

 workspace = "http://localhost:3000"
 jsonHeader = {headers: new HttpHeaders({'content-type':'application/json'})}
  constructor(private httpclient: HttpClient,private router:Router) { }
  // retrieving register services
  signIn(newLogin:any)
  {
    
      return this.httpclient.post<any>(this.workspace+'/api/adminlogin',newLogin)
    
  }
  // add registration details
  
  getAccessToken(){
    return localStorage.getItem('token')
  }
signOut(){
  return this.httpclient.post<any>(this.workspace+'/api/adminsignout',{},this.jsonHeader).subscribe(
    (result:any)=>{
      this.router.navigate(['admin'])
    }
  )
}

authenticate(){
  return !!localStorage.getItem('token')
}

}
