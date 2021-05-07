import { HttpClient,HttpClientModule,HttpHeaders} from '@angular/common/http';
import {admin} from './admin';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpclient:HttpClient) { }
  getadmin()
  {
    return this.httpclient.get<any>('http://localhost:3000/api/admin')
  }
}