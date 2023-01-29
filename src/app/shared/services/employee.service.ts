import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { EmployeeModel } from '../models/employee-model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

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
    return this.httpClient.get(this.apiURL + '/employees/')
    .pipe(
      catchError(this.errorHandler)
    )
  }


  create(employee:EmployeeModel): Observable<any> {
    return this.httpClient.post(this.apiURL + '/employees/', JSON.stringify(employee), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  find(id:number): Observable<any> {
    return this.httpClient.get(this.apiURL + '/employees/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  update(id:number, employee:EmployeeModel): Observable<any> {
    return this.httpClient.put(this.apiURL + '/employees/' + id, JSON.stringify(employee), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/employees/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

}
