 import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HelplinesService {
  //  push(helplines: any) {
  //     throw new Error('Method not implemented.');
  // }

  constructor(private httpclient: HttpClient) { }

  gethelplineSchema(){


    return this.httpclient.get<any>(`http://localhost:3000/api/HelplineSchema`)
  }

//   addhelplines(newhelplines:any)
// {
//   var headers= new HttpHeaders();
//   headers.append('helplines-type' , 'application/json ');
//   return this.httpclient.post<any>('http://localhost:3000/api/HelplineSchema', newhelplines,{headers:headers})
// }

}
