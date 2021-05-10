import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {
  push(Mandi: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private httpclient:HttpClient) { }

  getenquiry(){


    return this.httpclient.get<any>(`http://localhost:3000/api/contactUs`)
  }

  addEnquiry(newEnquiry:any)
{
  var headers= new HttpHeaders();
  headers.append('enquiry-type' , 'application/json ');
  return this.httpclient.post<any>('http://localhost:3000/api/enquiry', newEnquiry,{headers:headers})
}

}

