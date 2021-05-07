import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MandiService {

  constructor(private httpclient : HttpClient) { }

  getmandiSchema(){


    return this.httpclient.get<any>(`http://localhost:3000/api/mandischema`)

  }

}
