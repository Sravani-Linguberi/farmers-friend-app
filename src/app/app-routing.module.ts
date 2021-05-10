import { CropComponent } from './crop/crop.component';
import { AddressComponent } from './Soil/address/address.component';
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
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  
  {path: 'price' , component:  MarketPriceComponent,canActivate: [AuthGuard]},
  {path: 'address' , component: AddressComponent,canActivate: [AuthGuard]},
  {path : 'helplines' , component: HelplinesComponent,canActivate: [AuthGuard] },
  {path : 'Scheme' ,  component : SchemesComponent,canActivate: [AuthGuard]},
  {path: 'mandi' , component: MandiComponent,canActivate: [AuthGuard]},
  {path: 'addHelplines' , component : PostHelplinesComponent,canActivate: [AuthGuard]},
  {path: 'post-helpline' ,  component : PostHelplinesComponent,canActivate: [AuthGuard]},
  {path: 'crops/:id' ,  component : CropComponent,canActivate: [AuthGuard] },
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  {path: 'register' ,component: RegisterComponent},
  { path: 'contact', component: ContactUsComponent },
  { path: 'home', component: HomePageComponent,canActivate: [AuthGuard] },
  {path: 'admin' , component:  AdminComponent},

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
