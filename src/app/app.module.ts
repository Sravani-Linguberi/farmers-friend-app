
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
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from './material/material.module';
=======

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MarketPriceComponent } from './Info/market-price/market-price.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';



>>>>>>> 14256acd75ce73232928891686b9d720983e7a30

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomePageComponent,
    ContactUsComponent,
    HeaderComponent,
    FooterComponent,
<<<<<<< HEAD

=======
    MarketPriceComponent
>>>>>>> 14256acd75ce73232928891686b9d720983e7a30
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    // MatButtonModule,
    MaterialModule
=======
    FormsModule,
    HttpClientModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule

>>>>>>> 14256acd75ce73232928891686b9d720983e7a30
  ],
  providers: [ValidationService,RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
