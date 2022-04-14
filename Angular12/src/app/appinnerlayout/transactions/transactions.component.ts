import { Component, OnInit } from '@angular/core';
import { CommonUtil } from '../../../app/utils/common.util';
import { TransactionsService } from '../../services/transactions.service';
import { AccountRestapiService } from '../../services/account-restapi.service';
import { FormsModule }   from '@angular/forms';
// import { Transaction } from '../../Transaction';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})

export class TransactionsComponent implements OnInit {
  // transactions: Transaction[] = [];

  balance = 5824.76;
  fromStr = 'Free Checking(4692) - $' + this.balance;
  filterStr = '';
  toAcc = '';
  amt: any;
  order = 'asc';
  transactionsArray: any = [];
  fieldName = '';
  isSubmitted = false;

  constructor(private transactionservice: TransactionsService) { }

  ngOnInit(): void {
    // this.transactionservice.getTranscations().subscribe((transactions) => (this.transactions = transactions))
    this.transactionservice.getTransactions().subscribe(
      (response: any) => {
        this.transactionsArray = response.data;
      },
      (err) => {
        alert(err);
      }
    );
  }


  getMerchantLogoUrl(merchantName: string) {
    return CommonUtil.getMerchantLogoUrl(merchantName);
  }

  sort(f: string) {
    if (f == this.fieldName) {
      if (this.order == 'asc') {
        this.order = 'desc';
      } else if (this.order == 'desc') {
        this.order = '';
      } else {
        this.order = 'asc';
      }
    } else {
      this.fieldName = f;
      this.order = 'asc';
    }
  }

  onSubmit() {
    this.isSubmitted = false;
    if (this.balance - this.amt < -500) {
      alert('You can not overdraft your account beyond a balance of $ -500.00');
      return;
    }
    this.balance -= this.amt;
    this.fromStr = 'Free Checking(4692) - $' + this.balance;
    let obj = {
      categoryCode: '#12a580',
      dates: {
        valueDate: new Date().getTime()
      },
      merchant: {
        accountNumber: this.toAcc,
        name: 'Test'
      },
      transaction: {
        amountCurrency: { amount: this.amt, currencyCode: "EUR" },
        creditDebitIndicator: "DBIT",
        type: "Card Payment"
      }
    }
    this.transactionsArray = [obj, ...this.transactionsArray];
    this.amt = '';
    this.toAcc = '';
  }

  clearFilterField() {
    this.filterStr = '';
  }
}
