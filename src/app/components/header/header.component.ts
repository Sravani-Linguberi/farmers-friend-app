import { Router } from '@angular/router';
//import { register } from './../../register';
import { Component, Input, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/register.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: RegisterService,private router:Router) { }
   @Input() public title : string = "";

  

  ngOnInit() {
  }

  signOutUser(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }




}
