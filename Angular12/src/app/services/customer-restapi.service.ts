import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, pipe } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Customer } from '../entity/customer-model';
import { Account } from 'app/entity/account-model';
import { CustomerCredentials } from 'app/CustomerCredentials';

@Injectable({
  providedIn: 'root'
})
export class CustomerRestapiService {
  //Define api url
  apiUrl = 'http://localhost:44358/api';
  customers: any[] = [];
  login: boolean;

  constructor(private http: HttpClient) { }

  //Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Fetch list of customers Might remove later
  getCustomers(): Observable<Customer> {
    return this.http.get<Customer>(this.apiUrl + '/customers')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  listCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl + '/customer/' + '/customers')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Fetch customer details  by id
  getCustomerBy(customerNumber: string): Observable<Customer> {
    return this.http.get<Customer>(this.apiUrl + '/customer/' + customerNumber)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // Fetch all account details this paticular user  with customer id
  getAccountDetails(customerNumber: number): Observable<Account[]> {
    return this.http.get<Account[]>(this.apiUrl + '/customer/' + customerNumber)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Create Customer Might delete
  // createCustomer(customer: Customer): Observable<any> {
  //   return this.http.post<Customer>(this.apiUrl + '/customer', JSON.stringify(customer), this.httpOptions)
  //     .pipe(
  //       retry(1),
  //       catchError(this.handleError)
  //     )
  // }

  // Create Customer
  saveCustomer(customer: Customer): Observable<any> {
    console.log("Inside the saveCustomer")
    return this.http.post(this.apiUrl + '/customer/', JSON.stringify(customer), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Update Customer details
  updateCustomer(customerNumber: string, customer: any): Observable<Customer> {
    return this.http.put<Customer>(this.apiUrl + '/customer/' + customerNumber, JSON.stringify(customer), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Delete Customer details
  deleteCustomer(customerNumber: string) {
    return this.http.delete<Customer>(this.apiUrl + '/customer/' + customerNumber, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  validateCustomerLoginCredentials(customerCredentials: CustomerCredentials): Observable<any> {
    console.log("inside the validateLoginCredentials method of customer.service.ts");
    console.log(JSON.stringify(customerCredentials));
    return this.http.post(this.apiUrl + 'customer' + "customerLoginValidation", customerCredentials);
  }

  getAuthentication(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl + '/login/', customer);
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      //Get client-side error
      errorMessage = error.error.message;
    } else {
      //Get server-side error
      errorMessage = `Error code : ${error.status}\nMessage : ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
