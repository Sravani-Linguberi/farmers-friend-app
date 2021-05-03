import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm: any;
  constructor(private formBuilder: FormBuilder) {
    this.userForm=this.formBuilder.group({
      userName: ['',Validators.required,Validators.minLength(8)],
      phoneNumber: ['',[Validators.required,Validators.minLength(10)]],
      EnterOTP: ['',Validators.required]
    });
   }
saveUser()
{
  if(this.userForm.dirty && this.userForm.valid){
    alert(
      `userName: ${this.userForm.value.name} phoneNumber: ${this.userForm.value.phoneNumber}`
    );
  }
}
  ngOnInit(): void {
  }


}
