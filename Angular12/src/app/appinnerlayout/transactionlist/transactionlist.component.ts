import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionRestapiService } from '../../services/transaction-restapi.service';
import { AccountRestapiService } from '../../services/account-restapi.service';

@Component({
  selector: 'app-transactionlist',
  templateUrl: './transactionlist.component.html',
  styleUrls: ['./transactionlist.component.scss']
})
export class TransactionlistComponent implements OnInit {
  //store data
  Accounts:any=[];
  Transactions:any=[];

  constructor(private router:Router,private restApi:TransactionRestapiService,private restAApi:AccountRestapiService) { }

  ngOnInit() {
    const customerNumber = localStorage.getItem("customerNumber");
    this.loadAccountsBy(customerNumber);
  }

  //load data accounts by customerNumber
  loadAccountsBy(accountNumber: any) {
    return this.restAApi.getAccountsBy(accountNumber).subscribe((data: any =  {}) => {
      this.Accounts = data["data"];
    });
  }

  //load data wallets by accounNumber
  loadTransactionsBy(accountNumber: any) {
    
    return this.restApi.getTransactionsBy(accountNumber).subscribe((data: any = {}) => {
        this.Transactions = data["data"];
    });
  }

}

