import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { MarketPriceComponent } from './Info/market-price/market-price.component';

const routes: Routes = [
  { path: 'contact', component: ContactUsComponent },
  {path: 'price' , component:  MarketPriceComponent}
];
=======
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [{ path: 'contact', component: ContactUsComponent },
{path: 'register' ,component: RegisterComponent},
{path: 'login',component:LoginComponent}];
>>>>>>> 81d49594cc6753d8728c9b3a4001399cacff6d45

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
