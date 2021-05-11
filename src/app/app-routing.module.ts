import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { CropComponent } from './crop/crop.component';
import { AddressComponent } from './Soil/address/address.component';
import { EnquiryComponent } from './posts/enquiry/enquiry.component';
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
import { AuthGuard } from './guard/auth.guard';
import { PostMandiComponent } from './posts/post-mandi/post-mandi.component';
import { combineAll } from 'rxjs/operators';

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
  { path: 'home-page', component: AdminHomeComponent ,canActivate: [AuthGuard] },
  {path: 'admin' , component:  AdminComponent},
  {path: 'post-soil', component : PostSoilComponent},
  {path: 'post-mandi' ,  component : PostMandiComponent},
  {path: 'contactUs' , component : ContactUsComponent},
  {path : 'enquiry' , component : EnquiryComponent} ,
  {path: '', redirectTo: '/login', pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
