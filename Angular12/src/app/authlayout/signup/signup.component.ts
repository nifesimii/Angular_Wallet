import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { CustomerRestapiService } from 'app/services/customer-restapi.service';
import { Customer } from '../../entity/customer-model';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit { //implements OnInit 
  NgForm = NgForm
  customers: Customer[];
  customer: Customer = new Customer();
  invalid: boolean = true;

  constructor(private customerService: CustomerRestapiService, private router: Router) {
    this.customerService.listCustomers().subscribe(customers =>
      this.customers = customers);
  }
  handleFormData(form: any) {
    let data = form.value;
    console.log(data);
    this.customer.customerNumber = data.customerNumber;
    this.customer.firstName = data.firstName;
    this.customer.lastName = data.lastName;
    this.customer.birthDate = data.birthDate;
    this.customer.customername = data.customername;
    this.customer.password = data.password;
    this.customerService.saveCustomer(this.customer).subscribe(response => {
      console.log('Response');
      //console.log(this.router.navigate(['/banker/addCustomer']));
      console.log(response);
      document.getElementById("alert").style.display = "block";
      //this.router.navigateByUrl('http://localhost:4200/banker');
    })
    form.reset();
  }

  verifyPasswordConfirmPassword(password: any, confirmpassword: any, divName: string) {
    if (password == confirmpassword) {
      document.getElementById(divName).innerText = "";
      this.invalid = false;
    }
    else {
      document.getElementById(divName).innerText = "Passwords do not match!"
      this.invalid = true;
    }
  }

  verifyCustomerId(customerNumber: number, divName: string) {
    let i: number;
    let customerExists = 0;
    for (i = 0; i < this.customers.length; i++) {
      if (this.customers[i].customerNumber == customerNumber)
        customerExists = 1;
    }
    if (customerExists == 1) {
      document.getElementById(divName).innerText = "Customer Already Exists";
      this.invalid = true;
    }
    else {
      document.getElementById(divName).innerText = "";
      this.invalid = false;
    }
  }

  failedCustomVerification() {
    return this.invalid;
  }

  ngOnInit(): void {
    // var tooltiptriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    // tooltiptriggerList.map(function (e) {
    //   return new bootstrap.Tooltip(e)
    // });

  }
}