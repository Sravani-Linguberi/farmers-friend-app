import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private HttpClient : HttpClient ) { }
  

  public getData(query:string):Observable<any[]>{
    return this.HttpClient.get<any[]>(`http://localhost:3000/api/market`).pipe(
      catchError(this.handleError)
    )}
  handleError(error:HttpErrorResponse){
    return throwError(error.headers|| "server error")
  }

  // getMarketPrice(){
  //   return this.HttpClient.get<any>(`http://localhost:3000/api/market`)
  // }
  

}

