import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

constructor(private httpclient:HttpClient) { }

  getotp(phone:string){


    return this.httpclient.get<any>(`http://localhost:3000/api/otp?phone=${phone}`)
  }

  verify(phone:string,code:string){


    return this.httpclient.get<any>(`http://localhost:3000/api/verify?phone=${phone}&code=${code}`)
  }
  getVerified(phone:string,code:string){
    return new Promise((resolve,reject)=>{
      this.verify(phone,code).subscribe(
        response=> resolve(response),
        err => reject(err) 
    )
    })
  }

}