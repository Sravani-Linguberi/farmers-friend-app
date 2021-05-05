import { RegisterService } from './../../register.service';
import { Component, OnInit } from '@angular/core';
import {register} from '../../register';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  register:any;
  FullName?:string;
  phoneNumber?:string;
  data:any;

 constructor(private registerService: RegisterService) {}
 addregister()
 {
   const newregister={
     FullName:this.FullName,
     phoneNumber:this.phoneNumber
   }
   this.registerService.addregister(newregister)
   .subscribe(register =>{
     this.register.push(register);
     this.registerService.getregister()
    .subscribe(register =>
      this.register=register)
   })

 }
 getOTP(phoneNumber:string){
   console.log("INgetotp");
   console.log(phoneNumber);
   this.registerService.getOtp(phoneNumber)
   .subscribe(response=>
     console.log(response)

   )
  }
  ngOnInit(): void {

  }

}
