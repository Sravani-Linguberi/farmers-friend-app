import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      userName:  ['', Validators.required],
      phoneNumber:  ['', Validators.required],
    });
   }
   submitForm() {
    if (this.form.valid) {
      console.log(this.form.getRawValue());
  } else {
      console.log('There is a problem with the form');
  }
  }

  ngOnInit(): void {
  }

}
