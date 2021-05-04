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
    return this.HttpClient.get<any[]>(`https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd00000182ff88f640e24d6b7225d126eee9389d&format=json&offset=0&limit=100`).pipe(
      catchError(this.handleError)
    )
  }
  handleError(error:HttpErrorResponse){
    return throwError(error.headers|| "server error")
  }

}

