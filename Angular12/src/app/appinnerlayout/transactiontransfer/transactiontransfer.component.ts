import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AccountRestapiService } from '../../services/account-restapi.service';
import { TransactionRestapiService } from '../../services/transaction-restapi.service';
import { Transaction } from '../../entity/transaction-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transactiontransfer',
  templateUrl: './transactiontransfer.component.html',
  styleUrls: ['./transactiontransfer.component.scss']
})
export class TransactiontransferComponent implements OnInit {
  //form
  createFormGroup:FormGroup;

  Accounts:any=[];
  @Input()
  transfer ={accountNumber:'',anDebit:'',anCredit:'', amount:'', transactionType:''};
  message:string;
  constructor(private builder: FormBuilder,private restApi: TransactionRestapiService,private restAapi: AccountRestapiService, private router:Router, private location: Location) { }

  ngOnInit() {
    this.createFormGroup = this.builder.group({
      anDebit:['', [Validators.required]],
      anCredit:['', [Validators.required]],
      amount:['', [Validators.required]]
    })
    
    const cif = localStorage.getItem("customerNumber");
    this.loadAccountsBy(cif);
  }

  get anDebit(){
    return this.createFormGroup.get('anDebit');
  }
  
  get anCredit(){
    return this.createFormGroup.get('anCredit');
  }

  get amount(){
    return this.createFormGroup.get('amount');
  }

  loadAccountsBy(customerNumber: string) {
    return this.restAapi.getAccountsBy(customerNumber).subscribe((data: any = {}) => {
        this.Accounts = data["data"];
    });
  }
  create(){
    this.transfer.anDebit = this.createFormGroup.controls['anDebit'].value;
    this.transfer.anCredit = this.createFormGroup.controls['anCredit'].value;
    this.transfer.amount = this.createFormGroup.controls['amount'].value;
    this.restApi.transfer(new Transaction(null, null, Number(this.transfer.anDebit), Number(this.transfer.anCredit), Number(this.transfer.amount), 2, Number(this.transfer.anDebit))).subscribe((data:any = {}) => {
      if(data["status"]=="100"){
        this.message = data["message"];
      }else{
        this.transfer = data["data"];
        this.router.navigate(['appinnerlayout/transactions']);
      }
    })
  }

  goBack() : void {
    this.location.back();
  }
}
