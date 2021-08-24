import { PostAddressComponent } from './posts/post-address/post-address.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { CropComponent } from './components/crop/crop.component';
import { AddressComponent } from './components/address/address.component';
import { EnquiryComponent } from './posts/enquiry/enquiry.component';
import { PostSoilComponent } from './posts/post-soil/post-soil.component';
import { PostHelplinesComponent } from './posts/post-helplines/post-helplines.component';
import { MandiComponent } from './components/mandi/mandi.component';
import { SchemesComponent } from './components/schemes/schemes.component';
import { HelplinesComponent } from './components/helplines/helplines.component';
import { SoilInfoComponent } from './components/soil-info/soil-info.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketPriceComponent } from './components/market-price/market-price.component';


import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AuthGuard } from './components/guard/auth.guard';
import { PostMandiComponent } from './posts/post-mandi/post-mandi.component';
import { combineAll } from 'rxjs/operators';
import { VisualizationComponent } from './components/visualization/visualization.component';

const routes: Routes = [

  {path: 'price' , component:  MarketPriceComponent,canActivate: [AuthGuard]},
  {path: 'address' , component: AddressComponent,canActivate: [AuthGuard]},
  {path : 'helplines' , component: HelplinesComponent,canActivate: [AuthGuard] },
  {path : 'Scheme' ,  component : SchemesComponent,canActivate: [AuthGuard]},
  {path: 'mandi' , component: MandiComponent,canActivate: [AuthGuard]},
  {path: 'addHelplines' , component : PostHelplinesComponent,canActivate: [AuthGuard]},
    {path: 'crops/:id' ,  component : CropComponent,canActivate: [AuthGuard] },
  // {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  {path: 'register' ,component: RegisterComponent},
  { path: 'contact', component: ContactUsComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'home-page', component: AdminHomeComponent ,canActivate: [AuthGuard] },
  {path: 'admin' , component:  AdminComponent},
  {path: 'post-address', component : PostAddressComponent, canActivate:[AuthGuard]},
  {path: 'contactUs' , component : ContactUsComponent},
  {path : 'enquiry' , component : EnquiryComponent , canActivate:[AuthGuard]} ,
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'visuals', component:VisualizationComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
