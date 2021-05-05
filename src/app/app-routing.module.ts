import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketPriceComponent } from './Info/market-price/market-price.component';


import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [{ path: 'contact', component: ContactUsComponent },
{path: 'register' ,component: RegisterComponent},
<<<<<<< HEAD
  { path: 'login', component: LoginComponent },
  { path: 'home-page', component: HomePageComponent }
];

=======
{path: 'login',component:LoginComponent},
{path: 'price' , component:  MarketPriceComponent}];
>>>>>>> 14256acd75ce73232928891686b9d720983e7a30

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
