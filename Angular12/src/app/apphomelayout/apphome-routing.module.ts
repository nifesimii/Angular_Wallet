import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApphomelayoutComponent } from './apphomelayout.component';
import { ProfileComponent } from './profile/profile.component';
import { WalletComponent } from './wallet/wallet.component';
//Form Module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {


    path:'',
    component: ApphomelayoutComponent,
   

    children:[
      {
        path:'home',
        component: HomeComponent
      },    
      {
        path:'wallet',
        component: WalletComponent
      },    
      {
        path:'profile',
        component: ProfileComponent
      },
    ]
  
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule
    
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ApphomelayoutRoutingModule { }
