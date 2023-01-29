import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL = "http://localhost:3000";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }


  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }


  getAll(): Observable<any>{
    return this.httpClient.get(this.apiURL + '/users/')
    .pipe(
      catchError(this.errorHandler)
    )
  }


  create(user:UserModel): Observable<any> {
    return this.httpClient.post(this.apiURL + '/users/', JSON.stringify(user), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  find(id:number): Observable<any> {
    return this.httpClient.get(this.apiURL + '/users/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  update(id:number, user:UserModel): Observable<any> {
    return this.httpClient.put(this.apiURL + '/users/' + id, JSON.stringify(user), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/users/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

}
