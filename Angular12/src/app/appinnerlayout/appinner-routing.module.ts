import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppinnerlayoutComponent } from './appinnerlayout.component';



import { PagesComponent } from './pages/pages.component';
import { SettingsComponent } from './settings/settings.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MessagesComponent } from './messages/messages.component';
import { ChatlistComponent } from './chatlist/chatlist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FaqsComponent } from './faqs/faqs.component';
import { UserlistComponent } from './userlist/userlist.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BlogComponent } from './blog/blog.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AllreceivemoneyComponent } from './allreceivemoney/allreceivemoney.component';
import { AddmoneyComponent } from './addmoney/addmoney.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { StyleComponent } from './style/style.component';
import { ReceivemoneyComponent } from './receivemoney/receivemoney.component';
import { BillsComponent } from './bills/bills.component';
import { SendmoneyComponent } from './sendmoney/sendmoney.component';
import { PayComponent } from './pay/pay.component';
import { RewardsComponent } from './rewards/rewards.component';
import { SavingsComponent } from './savings/savings.component';
import { Thankyou3Component } from './thankyou3/thankyou3.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { ProductsComponent } from './products/products.component';
import { MyordersComponent } from './myorders/myorders.component';
import { CartComponent } from './cart/cart.component';
import { CardsComponent } from './cards/cards.component';
import { AddressComponent } from './address/address.component';
import { AddaddressComponent } from './addaddress/addaddress.component';
import { PaymentComponent } from './payment/payment.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { TrackorderComponent } from './trackorder/trackorder.component';
import { ExampleComponent } from './example/example.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { ListaccountComponent } from './listaccount/listaccount.component';
import { DetailaccountComponent } from './detailaccount/detailaccount.component';
import { TransactionlistComponent } from './transactionlist/transactionlist.component';
import { TransactiontopupComponent } from './transactiontopup/transactiontopup.component';
import { TransactiontransferComponent } from './transactiontransfer/transactiontransfer.component';
import { TransactionwithdrawComponent } from './transactionwithdraw/transactionwithdraw.component';
import { DeleteaccountComponent } from './deleteaccount/deleteaccount.component';

const routes: Routes = [
  {
    path: '',
    component: AppinnerlayoutComponent,

    children: [
      {
        path: 'transactiontopup',
        component: TransactiontopupComponent,
      },
      {
        path: 'transactiontransfer',
        component: TransactiontransferComponent,
      },
      {
        path: 'transactionwithdraw',
        component: TransactionwithdrawComponent,
      },
      {
        path: 'deleteaccount',
        component: DeleteaccountComponent,
      },

      {
        path: 'transactionlist',
        component: TransactionlistComponent,
      },
      {
        path: 'detail',
        component: DetailaccountComponent,
      },
      {
        path: 'create',
        component: CreateaccountComponent,
      },
      {
        path: 'list',
        component: ListaccountComponent,
      },
      {
        path: 'allreceivemoney',
        component: AllreceivemoneyComponent,
      },
      {
        path: 'withdraw',
        component: WithdrawComponent,
      },
      {
        path: 'transactions',
        component: TransactionsComponent,
      },
      {
        path: 'addmoney',
        component: AddmoneyComponent,
      },
      {
        path: 'pay',
        component: PayComponent
      },
      {
        path: 'sendmoney',
        component: SendmoneyComponent
      },
      {
        path: 'bills',
        component: BillsComponent
      },
      {
        path: 'example',
        component: ExampleComponent
      },
      {
        path: 'receivemoney',
        component: ReceivemoneyComponent
      },
      {
        path: 'rewards',
        component: RewardsComponent
      },
      {
        path: 'savings',
        component: SavingsComponent
      },
      {
        path: 'style',
        component: StyleComponent
      },
      {
        path: 'thankyou3',
        component: Thankyou3Component,
      },
      // Other pages        
      {
        path: 'aboutus',
        component: AboutusComponent,
      },
      {
        path: 'chat',
        component: ChatlistComponent,
      },
      {
        path: 'messages',
        component: MessagesComponent,
      },
      {
        path: 'notifications',
        component: NotificationsComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
      {
        path: 'pages',
        component: PagesComponent,
      },
      {
        path: 'pagenotfound',
        component: PagenotfoundComponent,
      },
      {
        path: 'faqs',
        component: FaqsComponent,
      },
      {
        path: 'userlist',
        component: UserlistComponent,
      },
      {
        path: 'timeline',
        component: TimelineComponent,
      },
      {
        path: 'contactus',
        component: ContactusComponent,
      },
      {
        path: 'blog',
        component: BlogComponent,
      },
      {
        path: 'blogdetails',
        component: BlogdetailsComponent,
      },
      /* shopping pages */
      {
        path: 'allproducts',
        component: AllproductsComponent,
      },
      {
        path: 'product',
        component: ProductsComponent,
      },
      {
        path: 'myorders',
        component: MyordersComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: 'cards',
        component: CardsComponent,
      },
      {
        path: 'address',
        component: AddressComponent,
      },
      {
        path: 'addaddress',
        component: AddaddressComponent,
      },
      {
        path: 'payment',
        component: PaymentComponent,
      },
      {
        path: 'invoice',
        component: InvoiceComponent,
      },
      {
        path: 'track',
        component: TrackorderComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: [RouterModule,
    FormsModule,
    ReactiveFormsModule]
})
export class AppinnerlayoutRoutingModule { }

