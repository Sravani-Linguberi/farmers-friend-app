import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

constructor(private httpclient:HttpClient) { }

  getotp(phone:number){


    return this.httpclient.get<any>(`http://localhost:3000/otp?phone=91${phone}&channel=sms`)
  }

  verify(phone:number,code:number){


    return this.httpclient.get<any>(`http://localhost:3000/verify?phone=91${phone}&code=${code}`)
  }

}