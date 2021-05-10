import { PostSoilComponent } from './posts/post-soil/post-soil.component';
import { PostHelplinesComponent } from './posts/post-helplines/post-helplines.component';
import { MandiComponent } from './Soil/mandi/mandi.component';
import { SchemesComponent } from './schemes/schemes.component';
import { HelplinesComponent } from './helplines/helplines.component';
import { SoilInfoComponent } from './Soil/soil-info/soil-info.component';
import { AdminComponent } from './auth/admin/admin.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketPriceComponent } from './Info/market-price/market-price.component';


import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PostMandiComponent } from './posts/post-mandi/post-mandi.component';

const routes: Routes = [{ path: 'contact', component: ContactUsComponent },
{path: 'register' ,component: RegisterComponent},
  { path: 'login', component: LoginComponent },
  { path: 'home-page', component: HomePageComponent },
  {path: 'admin' , component:  AdminComponent},
  {path: 'price' , component:  MarketPriceComponent},
  {path: 'address' , component: SoilInfoComponent},
  {path : 'helplines' , component: HelplinesComponent },
  {path : 'Scheme' ,  component : SchemesComponent},
  {path: 'mandi' , component: MandiComponent},
  {path: 'addHelplines' , component : PostHelplinesComponent},
  {path: 'post-helpline' ,  component : PostHelplinesComponent},
  {path: 'post-soil', component : PostSoilComponent},
  {path: 'post-mandi' ,  component : PostMandiComponent},
  {path: 'contactUs' , component : ContactUsComponent},
  {path: '', redirectTo: '/home-page', pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
