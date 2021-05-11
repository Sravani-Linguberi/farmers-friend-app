import { OtpService } from './../../Info/market-price/otp.service';
//import { register } from './../../register';
//import { RegisterService } from './../../login.service';
import { RegisterService } from './../../register.service';
import { Component, OnInit } from '@angular/core';
import {register} from '../../register';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide:boolean=false;
  status:any =""
form: FormGroup;
constructor(private fb: FormBuilder, private authService: RegisterService, private router: Router, private otpservice:OtpService) {
  this.form = this.fb.group({
    username: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
    password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
    phone: new FormControl('', Validators.compose([Validators.required, Validators.minLength(10)])),
    code:new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)]))
  });
}
  ngOnInit(): void {

  }

  signUpUser(){
    
         const newregister={
           FullName:this.form.get('username')!.value,
           phone:this.form.get('phone')!.value,
           pass:this.form.get('password')!.value
         }
   
    this.authService.signUp(
      newregister
    ).subscribe(res=>{console.log(res)
    localStorage.setItem('token',res.token)
      //this.router.navigate(['/home'])
  },
  err=>{alert(err.error.msg)
    //console.log(err)
    //window.location.reload()
  })
  }


  getOtp(phone: string){
   // const phone = this.form.get('phone')!.value
    console.log(phone)
    this.otpservice.getotp(phone).subscribe(res=>{
      console.log(res)
    },
    err=>{
      console.log(err)
    })

  }

  verifyOtp(){
    const phone = this.form.get('phone')!.value
    const code = this.form.get('code')!.value
    console.log(phone)
    console.log(code)
    this.otpservice.getVerified(phone,code)
    .then((res:any) => {
      console.log(res)
      this.status = res.status;
      console.log(this.status)
      if(this.status === "approved"){
        alert("You have successfully registered!")
        this.hide = true;
      }
    })
    .catch(err => console.log(err))

   }

}
