

import { AddressComponent } from './components/address/address.component';



import { MandiComponent } from './components/mandi/mandi.component';
import { SchemesComponent } from './components/schemes/schemes.component';
import { HelplinesComponent } from './components/helplines/helplines.component';
import { SoilInfoComponent } from './components/soil-info/soil-info.component';

import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketPriceComponent } from './components/market-price/market-price.component';


import { HomePageComponent } from './components/home-page/home-page.component';


import { combineAll } from 'rxjs/operators';


const routes: Routes = [

  {path: 'price' , component:  MarketPriceComponent},
  {path: 'address' , component: AddressComponent},
  {path : 'helplines' , component: HelplinesComponent },
  {path : 'Scheme' ,  component : SchemesComponent},
  {path: 'mandi' , component: MandiComponent},


  // {path: '', redirectTo: '/login', pathMatch: 'full'},

  { path: 'contact', component: ContactUsComponent },
  { path: 'home', component: HomePageComponent },


  {path: 'contactUs' , component : ContactUsComponent},

  {path: '', redirectTo: '/home', pathMatch: 'full'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
