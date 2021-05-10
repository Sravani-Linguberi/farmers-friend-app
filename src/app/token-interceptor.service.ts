import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { RegisterService } from './register.service';
//import {RegisterService} from './register.service'
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }
  intercept(req:any,next:any){
    //let authService = this.injector.get(RegisterService)
    let tokenizedReq = req.clone({
      setHeaders:{
        Authorization:`Bearer xx.yy.zz`
      }
    })
    return next.handle(tokenizedReq)
  }
}
