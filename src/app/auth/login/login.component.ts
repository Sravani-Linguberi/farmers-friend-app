import { LoginService } from './../../login.service';
import { Component, OnInit } from '@angular/core';
import {login} from '../../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login:any;
  FullName?:string;
  phoneNumber?:number;
  constructor(private loginService: LoginService) { }
  addlogin()
  {
    const newlogin={
      phoneNumber:this.phoneNumber
    }
    this.loginService.addregister(newlogin)
    .subscribe(login =>{
      this.login.push(login);
      this.loginService.getregister()
     .subscribe(login =>
       this.login=login)
    })
  }
  ngOnInit(): void {
  }


}
