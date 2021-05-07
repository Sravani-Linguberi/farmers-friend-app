import { AdminComponent } from './auth/admin/admin.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketPriceComponent } from './Info/market-price/market-price.component';


import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [{ path: 'contact', component: ContactUsComponent },
{path: 'register' ,component: RegisterComponent},
  { path: 'login', component: LoginComponent },
  { path: 'home-page', component: HomePageComponent },
  {path: 'admin' , component:  AdminComponent},
  {path: 'price' , component:  MarketPriceComponent},
  {path: '', redirectTo: '/home-page', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
