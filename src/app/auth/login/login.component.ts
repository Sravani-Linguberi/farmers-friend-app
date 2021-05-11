import { Router } from '@angular/router';
import {RegisterService } from './../../register.service';
import { Component, OnInit } from '@angular/core';
import {login} from '../../login';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // login:any;
  // FullName?:string;
  // phoneNumber?:number;
  // constructor(private loginService: LoginService) { }
  // addlogin()
  // {
  //   const newlogin={
  //     phoneNumber:this.phoneNumber
  //   }
  //   this.loginService.addregister(newlogin)
  //   .subscribe(login =>{
  //     this.login.push(login);
  //     this.loginService.getregister()
  //    .subscribe(login =>
  //      this.login=login)
  //   })
  // }
  // ngOnInit(): void {
  // }
  form: FormGroup;
  constructor(private fb: FormBuilder, private authService: RegisterService, private router:Router) {
    this.form = this.fb.group({
      phone: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

   signInUser(){
    const newlogin={
          phone:this.form.get('phone')!.value,
          pass:this.form.get('password')!.value
        }
    this.authService.signIn(
      newlogin
    ).subscribe(res=>{console.log(res)
      alert(res.msg)
      localStorage.setItem('token',res.token)
    this.router.navigate(['/home'])},
    err=>{alert(err.error.msg)
      //console.log(err)
      window.location.reload()
    })
  }

}
