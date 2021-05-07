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
  phoneNumber?:number;

 constructor(private RegisterService: RegisterService) {}
 addregister()
 {
   const newregister={
     FullName:this.FullName,
     phoneNumber:this.phoneNumber
   }
   this.RegisterService.addregister(newregister)
   .subscribe(register =>{
     this.register.push(register);
     this.RegisterService.getregister()
    .subscribe(register =>
      this.register=register)
   })
   console.log(this.FullName);
 }
  ngOnInit(): void {

  }

}
