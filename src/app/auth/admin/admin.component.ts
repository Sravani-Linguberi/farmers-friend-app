import { AdminService } from './../../admin.service';
import { Component, OnInit } from '@angular/core';
import{admin} from '../../admin';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
//import { AdminAuthService } from 'src/app/admin-auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
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
  constructor(private fb: FormBuilder, private authService: AdminService, private router:Router) {
    this.form = this.fb.group({
      phone: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

   getadmin(){
    const newlogin={
          phone:this.form.get('phone')!.value,
          pass:this.form.get('password')!.value
        }
    this.authService.signIn(
      newlogin
    ).subscribe(res=>{console.log(res)
      localStorage.setItem('token',res.token)
    this.router.navigate(['/home-page'])},
    err=>{alert(err.error.msg)
      //console.log(err)
      window.location.reload()
    })
  }

}
