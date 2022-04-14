import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import {CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthlayoutRoutingModule } from './authlayout/authlayout-routing.module';
import { AppinnerlayoutRoutingModule } from './appinnerlayout/appinner-routing.module';
import { ApphomelayoutRoutingModule } from './apphomelayout/apphome-routing.module';
import { PagenotfoundComponent } from './appinnerlayout/pagenotfound/pagenotfound.component';





const routes: Routes = [
  {
    path: '**',
    redirectTo: '/pagenotfound',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthlayoutRoutingModule,
    AppinnerlayoutRoutingModule,
    ApphomelayoutRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule,FormsModule]
})
export class AppRoutingModule { }
