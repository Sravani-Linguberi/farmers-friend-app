import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {soilSchema} from './soilSchema'

@Injectable({
  providedIn: 'root'
})
export class SoilSchemaService {
  push(soilSchema:any) {
    throw new Error('Method not implemented.');
  }


  constructor(private httpclient: HttpClient) { }


  getsoilSchema(query:string){


    return this.httpclient.get<any>(`http://localhost:3000/api/SoilSchemas`)
}

addgetsoilSchema(newsoilSchema:any)
{
  var headers= new HttpHeaders();
  headers.append('soil-type' , 'application/json ');
  return this.httpclient.post<any>('http://localhost:3000/api/soilSchema', newsoilSchema,{headers:headers})
}
}



