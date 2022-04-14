import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
// Rest api service
import {CustomerRestapiService} from '../../services/customer-restapi.service';
import { AuthService } from '../../services/auth.service';
// Entity
import {Customer} from '../../entity/customer-model';
import { CustomerCredentials } from '../../CustomerCredentials';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  NgForm=NgForm
  customers: Customer[];
  
  constructor(
    private router: Router, private customerService: CustomerRestapiService, public authService: AuthService) { }
  login1: boolean;
  ngOnInit() {

    if (localStorage.getItem("isLoggedIn") == "true") {
      if (localStorage.getItem("isCustomer") == "true") {
        this.router.navigate(['/']);
      }
      else {
        this.router.navigate(['/']);
      }

    }
    this.customerService.listCustomers().subscribe(customers =>
      this.customers = customers);
  }

  login(data: CustomerCredentials) {
    let customerNumber = data.customerNumber;
    let password = data.password;
    console.log(`this is from login funtion`);
    if (!this.verifyCustomerExists(customerNumber)) {
      document.getElementById("myModal").style.display = "block";
      return;
    }
    this.customerService.validateCustomerLoginCredentials(data).subscribe((response: boolean) => {
      console.log('Response from login function of customerlogin.component.ts');
      console.log(response);
      if (response === true) {
        console.log("coming into true condition");
        // this.authService.addCustomer(customerNumber,password);
        console.log("this.authService.logInOrOut is " + this.authService.logInOrOut);
        this.authService.LogTheCustomerOrBanker(data.customerNumber + "", "true");
        //  this.authService.setLogin(true);
        //  this.authService.timering(1000);
        //  console.log("this.authService.logInOrOut is "+this.authService.logInOrOut);
        //   localStorage.setItem('isLoggedIn', "true");
        //   localStorage.setItem('token', data.customerNumber+"");
        //   localStorage.setItem('isCustomer',"true");
        this.customerService.login = true;
        this.login1 = true;
        this.router.navigate(['/customer', customerNumber]);
      }
      else {
        document.getElementById("myModal").style.display = "block";
      }
    });
  }

  functionclose(form: { reset: () => void; }) {
    document.getElementById("myModal").style.display = "none";
    form.reset();
  }

  verifyCustomerExists(customerNumber: number) {
    let i: number;
    let customerExists = false;
    for (i = 0; i < this.customers.length; i++) {
      if (this.customers[i].customerNumber == customerNumber)
        customerExists = true;
    }
    return customerExists;
  }

}
