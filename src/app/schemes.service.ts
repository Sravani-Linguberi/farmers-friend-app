import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchemesService {

  constructor(private httpclient : HttpClient) { }


  getschemesSchema(){


    return this.httpclient.get<any>(`http://localhost:3000/api/schemeSchema`)





  }




}
