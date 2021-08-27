import { Router } from '@angular/router';
//import { register } from './../../register';
import { Component, Input, OnInit } from '@angular/core';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
@Input() public carousel:any
  // constructor(public authService: RegisterService,private router:Router) { }
   @Input() public title : string = "";



  // ngOnInit() {
  // }

  signOutUser(){
    localStorage.removeItem('token')
    // this.router.navigate(['/login'])
  }




}
