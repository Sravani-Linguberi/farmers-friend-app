import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {soilSchema} from './soilSchema'

@Injectable({
  providedIn: 'root'
})
export class SoilSchemaService {

  constructor(private httpclient: HttpClient) { }


  getsoilSchema(){


    return this.httpclient.get<any>(`http://localhost:3000/api/SoilSchema?STATE="Assam"`)





  }




}


