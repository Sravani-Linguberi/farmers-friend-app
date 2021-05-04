import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketPriceComponent } from './Info/market-price/market-price.component';


import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [{ path: 'contact', component: ContactUsComponent },
{path: 'register' ,component: RegisterComponent},
{path: 'login',component:LoginComponent},
{path: 'price' , component:  MarketPriceComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
