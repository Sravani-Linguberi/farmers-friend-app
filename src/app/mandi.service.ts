import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MandiService {
  push(Mandi: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private httpclient : HttpClient) { }

  getmandiSchema(){
 return this.httpclient.get<any>(`http://localhost:3000/api/mandischema`)
 }

  addMandi(newmandi:any)
{
  var headers= new HttpHeaders();
  headers.append('mandi-type' , 'application/json ');
  return this.httpclient.post<any>('http://localhost:3000/api/mandiSchema', newmandi,{headers:headers})
}}
