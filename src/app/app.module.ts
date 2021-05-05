
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
import { SoilInfoComponent } from './Soil/soil-info/soil-info.component';



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
    MarketPriceComponent,
    SoilInfoComponent
=======
<<<<<<< HEAD

=======
    MarketPriceComponent
>>>>>>> 14256acd75ce73232928891686b9d720983e7a30
>>>>>>> 0c7d4184d919163c84e9ec2bef965383fc2c73d9
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
