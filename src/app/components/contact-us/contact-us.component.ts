
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

 Fullname=new FormControl('',[Validators.required,Validators.minLength(3)]);
    Topic=new FormControl('',[Validators.required,Validators.minLength(5)]);
    Details=new FormControl('',[Validators.required,Validators.minLength(15)])
contactForm:FormGroup

  constructor(private fb: FormBuilder) {
    this.contactForm=this.fb.group(
      {
    Fullname:this.Fullname,
    Topic:this.Topic,
    Details:this.Details
      }
    )
  }
  
  ngOnInit(): void {

  }

addcontacUs(){
  // console.log(this.contactForm)
  this.contactForm.reset();
  alert('Your details added Successfully')

      }



}
