import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketPriceComponent } from './Info/market-price/market-price.component';

const routes: Routes = [
  { path: 'contact', component: ContactUsComponent },
  {path: 'price' , component:  MarketPriceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
