import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AccountRestapiService } from '../../services/account-restapi.service';
import { TransactionRestapiService } from '../../services/transaction-restapi.service';
import { Transaction } from '../../entity/transaction-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-transactionwithdraw',
  templateUrl: './transactionwithdraw.component.html',
  styleUrls: ['./transactionwithdraw.component.scss']
})
export class TransactionwithdrawComponent implements OnInit {
  //form
  createFormGroup: FormGroup;

  @Input()
  withdraw = { accountNumber: '', anDebit: '', amount: '', transactionType: '' };
  Accounts: any = [];
  message: string;
  constructor(private builder: FormBuilder, private restApi: TransactionRestapiService, private restAapi: AccountRestapiService, private router: Router, private location: Location) { }

  ngOnInit() {
    this.createFormGroup = this.builder.group({
      anDebit: ['', [Validators.required]],
      amount: ['', [Validators.required]]
    })

    const cif = localStorage.getItem("customerNumber");
    this.loadAccountsBy(cif);
  }

  get anDebit() {
    return this.createFormGroup.get('anDebit');
  }

  get amount() {
    return this.createFormGroup.get('amount');
  }

  loadAccountsBy(customerNumber: string) {
    return this.restAapi.getAccountsBy(customerNumber).subscribe((data: any = {}) => {
      this.Accounts = data["data"];
    });
  }
  create() {
    this.withdraw.anDebit = this.createFormGroup.controls['anDebit'].value;
    this.withdraw.amount = this.createFormGroup.controls['amount'].value;
    this.restApi.withdraw(new Transaction(null, null, Number(this.withdraw.anDebit), null, Number(this.withdraw.amount), 3, Number(this.withdraw.anDebit))).subscribe((data: any = {}) => {
      if (data["status"] == "100") {
        this.message = data["message"];
      } else {
        this.withdraw = data["data"];
        this.router.navigate(['appinnerlayout/transactions']);
      }
    })
  }

  goBack(): void {
    this.location.back();
  }
}
