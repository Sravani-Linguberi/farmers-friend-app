//import { RegisterService } from './../login.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';

import { RegisterService } from '../../register.service';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService:RegisterService, private router:Router){}

  canActivate():boolean{
    if(this.authService.authenticate()){
      return true;
    }
    else{
      this.router.navigate(['/login'])
      return false;
    }

  }

}

