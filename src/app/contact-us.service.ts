import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  push(contactus: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient : HttpClient) { }


  getcontactUs(){


    return this.httpClient.get<any>(`http://localhost:3000/api/contactUs`)

  }

  addcontacUs(contactus:any)
{
  var headers= new HttpHeaders();
  headers.append('contactUs-type' , 'application/json ');
  return this.httpClient.post<any>('http://localhost:3000/api/contactUs', contactus,{headers:headers})
}

}
