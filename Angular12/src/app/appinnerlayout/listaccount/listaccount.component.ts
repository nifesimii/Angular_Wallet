import { Component, OnInit } from '@angular/core';
// Rest api service
import {AccountRestapiService} from '../../services/account-restapi.service';
import { WalletRestapiService } from '../../services/wallet-restapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listaccount',
  templateUrl: './listaccount.component.html',
  styleUrls: ['./listaccount.component.scss']
})
export class ListaccountComponent implements OnInit {
  
  //store data
  Accounts:any=[];
  
  //store data
  Wallets:any=[];

  constructor(private restWApi:WalletRestapiService,private restApi:AccountRestapiService,private router:Router) { }

  ngOnInit() {
    const cif = localStorage.getItem("customerNumber");
    this.loadAccountsBy(cif);
  }
  //load data account by customerNumber
  loadAccountsBy(customerNumber: any ) {
    return this.restApi.getAccountsBy(customerNumber).subscribe((data: any =  {}) => {
        this.Accounts = data["data"];
    });
  }
  //load data wallets by accounNumber
  loadWalletsBy(accountNumber: any) {
    return this.restWApi.getWalletsBy(accountNumber).subscribe((data: any = {}) => {
        this.Wallets = data["data"];
    });
  }

  deleteWallet(walletId: string) {
    if(window.confirm('are you want to delete ?')) {
      this.restWApi.deleteWalletBy(walletId).subscribe(data => {
        this.router.navigate(['account/list'])
      })
    }
  }

  delete(accountNumber: string) {
    if(window.confirm('are you want to delete ?')) {
      const cif = localStorage.getItem("customerNumber");
      this.restApi.deleteAccount(accountNumber).subscribe(data => {
        this.loadAccountsBy(cif);
      })
    }
  }

}
