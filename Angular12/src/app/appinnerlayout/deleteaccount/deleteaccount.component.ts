import { Component, OnInit } from '@angular/core';
import { AccountRestapiService } from '../../services/account-restapi.service';
import { CustomerRestapiService } from '../../services/customer-restapi.service';
import { Router } from '@angular/router';
import { Account } from '../../entity/account-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-deleteaccount',
  templateUrl: './deleteaccount.component.html',
  styleUrls: ['./deleteaccount.component.scss']
})
export class DeleteaccountComponent implements OnInit {
  NgForm = NgForm

  accounts: Account[];
  inValidAccount = true;
  accountExists: number;

  constructor(private accountService: AccountRestapiService, private router: Router) {
  }

  ngOnInit() {
    this.accountService.getAccounts().subscribe(accounts =>
      this.accounts = accounts);
  }

  handleDelete(form: any) {
    let accountNumber = form.value.accountNumber;
    this.accountService.deleteAccount(accountNumber).subscribe(response => {
      console.log('Response');
      console.log(response);
      document.getElementById("alert").style.display = "block";
    })
    form.reset();
  }

  verifyAccountExists(accountNumber: any, divName: string) {
    let i: number;
    this.accountExists = 0;
    if (accountNumber == null) {
      document.getElementById(divName).innerText = "";
    }
    if (accountNumber != null) {
      for (i = 0; i < this.accounts.length; i++) {
        if (accountNumber == this.accounts[i].accountNumber) {
          this.accountExists = 1; break;
        }
      }
      if (this.accountExists == 0) {
        document.getElementById(divName).innerText = "Account Does not exist";
        this.inValidAccount = true;
      }
      else {
        document.getElementById(divName).innerText = "";
        this.inValidAccount = false;
      }
    }
  }
  failedAccountVerification() {
    return this.inValidAccount;
  }

}
