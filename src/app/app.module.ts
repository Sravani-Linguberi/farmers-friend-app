
import { RegisterService } from './register.service';
import { ValidationService } from './validation.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MarketPriceComponent } from './Info/market-price/market-price.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

import { AdminComponent } from './auth/admin/admin.component';
import { AdminService } from './admin.service';

import { SoilInfoComponent } from './Soil/soil-info/soil-info.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomePageComponent,
    ContactUsComponent,
    HeaderComponent,
    FooterComponent,

    MarketPriceComponent,
    AdminComponent,


    MarketPriceComponent,
    SoilInfoComponent,




    MarketPriceComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

    BrowserAnimationsModule,


    FormsModule,
    HttpClientModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule


  ],
  providers: [ValidationService,RegisterService,AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
