import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Account } from '../entity/account-model';

@Injectable({
  providedIn: 'root'
})
export class AccountRestapiService {

  private ACCOUNT_API_URL = "http://localhost:44355/api/v1/accounts";
  private ACCOUNT_API_DELETE_URL = "http://localhost:44355/api/v1/accounts/delete";
  private BASE_URL = "http://localhost:44355/api/v1/";

  //Define api url
  apiUrl = 'http://localhost:44355/api';

  constructor(private http: HttpClient) { }

  //Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Fetch list accounts by customerNumber
  getAccountsBy(customerNumber: string): Observable<Account> {
    return this.http.get<Account>(this.apiUrl + '/accounts/' + customerNumber)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Fetch list accounts by AccountNumber
  getAccountBy(accountNumber: string | null): Observable<Account> {
    return this.http.get<Account>(this.apiUrl + '/account/' + accountNumber)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }


  // Fetch all accounts
  getAccounts():Observable<Account[]>{
    return this.http.get<Account[]>(this.apiUrl + '/accounts');
  }

  // Create Account AccountNumber
  createAccount(account: any): Observable<Account> {
    return this.http.post<Account>(this.apiUrl + '/account/', JSON.stringify(account), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  updateAccount(accountNumber: string | null, account: any): Observable<Account> {
    return this.http.put<Account>(this.apiUrl + '/account/' + accountNumber, JSON.stringify(account), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deleteAccount(accountNumber: string) {
    return this.http.delete<Account>(this.apiUrl + '/account/' + accountNumber, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  handleError(error: { error: { message: string; }; status: any; message: any; }) {
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
