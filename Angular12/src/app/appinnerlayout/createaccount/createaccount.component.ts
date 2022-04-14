import { Component, OnInit, Input } from '@angular/core';
import { Location, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

// Rest api service
import { AccountRestapiService } from '../../services/account-restapi.service';
import { CustomerRestapiService } from '../../services/customer-restapi.service';
import { Customer } from '../../entity/customer-model';
import { Account } from '../../entity/account-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.scss']
})
export class CreateaccountComponent implements OnInit {
NgForm=NgForm


  //form
  createFormGroup: FormGroup;

  currentDate = new Date();

  customers: Customer[];

  constructor(private customerService: CustomerRestapiService, private pipeDate: DatePipe, private accountService: AccountRestapiService, private router: Router, private location: Location, private builder: FormBuilder) { }
  accountBalance: number;
  customerExists = 0;



  ngOnInit() {
    this.customerService.listCustomers().subscribe(customers =>
      this.customers = customers);

    // this.createFormGroup = this.builder.group({
    //   accountName: ['', [Validators.required]],
    //   balance: ['', [Validators.required]]
    // })
  }

  handleFormData(form: any ) {
    console.log(form);
    let data = form.value;
    let account: Account = new Account();
    console.log("Inside Handle form")
    account.accountBalance = data.accountBalance;
    account.accountType = data.accountType;
    account.customerNumber = data.customerId;
    this.accountService.createAccount(account).subscribe((response: any) => {
      console.log(response);
      document.getElementById("alert").style.display = "block";
    })
    form.reset();
  }

  minBalanceCheck(accountBalance: number, divName: string) {
    console.log("Inside minBalance method");
    this.accountBalance = accountBalance;
    if (accountBalance == null)
      document.getElementById(divName).innerText = "";
    if (accountBalance != null) {
      if (accountBalance < 5000) {
        document.getElementById(divName).innerText = "Minimum Balance should be 5000";
        return;
      }
      else {
        document.getElementById(divName).innerText = "";
      }
    }
  }
  balanceInValid(): boolean {
    if (this.accountBalance < 5000)
      return true;
    else
      { return false};
  }

  customerExistCheck(customerNumber: any, divName: string) {
    let i: number;
    this.customerExists = 0;
    if (customerNumber == null) {
      document.getElementById(divName).innerText = "";
    }
    if (customerNumber != null) {
      console.log("----Customer Object----")
      console.log(this.customers.length);
      for (i = 0; i < this.customers.length; i++) {
        if (this.customers[i].customerNumber == customerNumber)
          this.customerExists = 1;
      }
      if (this.customerExists == 0) {
        document.getElementById(divName).innerText = "Customer Does not exist"; return;
      }
      else
        document.getElementById(divName).innerText = "";
    }
  }
  customerNotExists(): boolean {
    console.log("Inside customerCheck method");
    if (this.customerExists == 0)
      return true;
    else
      {return false};
  }
  

  // get accountName() {
  //   return this.createFormGroup.get('accountName');
  // }

  // get balance() {
  //   return this.createFormGroup.get('balance');
  // }
  

  // loadCustomer(){
    // const customerNumber = localStorage.getItem('customerNumber');
    // this.restCapi.getCustomerBy(customerNumber).subscribe(
    // );
    
  // }

//   create() {
//     let account = new Account();
//     account.accountName = this.createFormGroup.controls['accountName'].value;
//     account.balance = this.createFormGroup.controls['balance'].value;
//     customerNumber = localStorage.getItem('customerNumber');
//     account.customerNumber = customerNumber;


//     this.restApi.createAccount(account).subscribe((data: any = {}) => {
//       account = data["data"];
//       this.router.navigate(['account/list'])
//       this.router.navigate(['account/list'])
//     })
//   }

//   goBack(): void {
//     this.location.back();
//   }
}
