import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GET_TRANSACTIONS_URL } from "../constants/url.constant";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TransactionsService {
  constructor(private http: HttpClient) {}

  public getTransactions(): Observable<any> {
    return this.http.get(GET_TRANSACTIONS_URL);
  }
}




// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { Observable, of } from 'rxjs';
// import { Transaction } from '../Transaction';
// import { TRANSACTIONS } from '../mock-transactions';


// @Injectable({
//   providedIn: 'root'
// })
// export class TransactionsService {
//   private apiUrl = 'http://localhost:3001/transactions'

//   constructor(private http: HttpClient) { }

//   getTranscations(): Observable<Transaction[]> {
//     return this.http.get<Transaction[]>(this.apiUrl);
//   }
// }


