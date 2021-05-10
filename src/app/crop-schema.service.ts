import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CropSchemaService {

  constructor(private httpclient: HttpClient) { }


  getCropSchema(){
    return this.httpclient.get<any>(`http://localhost:3000/api/cropSchema`)
  }
}


