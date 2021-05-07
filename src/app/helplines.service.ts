import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelplinesService {

  constructor(private httpclient: HttpClient) { }

  gethelplineSchema(){


    return this.httpclient.get<any>(`http://localhost:3000/api/HelplineSchema`)
  }




}
