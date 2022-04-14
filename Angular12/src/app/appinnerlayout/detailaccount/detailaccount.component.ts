import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
// Rest api service
import { AccountRestapiService } from '../../services/account-restapi.service';

@Component({
  selector: 'app-detailaccount',
  templateUrl: './detailaccount.component.html',
  styleUrls: ['./detailaccount.component.scss']
})
export class DetailaccountComponent implements OnInit {
  
  Account:any = {};

  constructor(private route: ActivatedRoute,private router:Router, private restApi:AccountRestapiService, private location: Location) { } 

  ngOnInit() {
    this.getAccountDetail()
  }
  
  getAccountDetail() : void {
    const accountNumber = this.route.snapshot.paramMap.get('accountNumber');
    this.restApi.getAccountBy(accountNumber)
    .subscribe((data: any = {}) => {
      this.Account = data["data"];
    })
  }

  updateAccount(){
    if(window.confirm('are you want to update ?')){
      const accountNumber = this.route.snapshot.paramMap.get('accountNumber');
      this.restApi.updateAccount(accountNumber,this.Account)
      .subscribe((data: any = {}) => {
        this.Account = data["data"];
        this.router.navigate(['/account/list'])
      })
    }
  }

  goBack() : void {
    this.location.back();
  }

}

