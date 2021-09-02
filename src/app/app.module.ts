



import { MandiService } from './mandi.service';
import { SchemesComponent } from './components/schemes/schemes.component';
import { HelplinesComponent } from './components/helplines/helplines.component';
import { SchemesService } from './schemes.service';
import { HelplinesService } from './helplines.service';
import { InfoService } from './components/market-price/info.service';
import { SoilSchemaService } from './soil-schema.service';


import { ValidationService } from './validation.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageComponent } from './components/home-page/home-page.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarketPriceComponent } from './components/market-price/market-price.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

import { SoilInfoComponent } from './components/soil-info/soil-info.component';



import { MandiComponent } from './components/mandi/mandi.component';
import { AddressComponent } from './components/address/address.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
// import { SoilComponent } from './posts/soil/soil.component';






@NgModule({

  declarations: [
    AppComponent,

    HomePageComponent,

    HeaderComponent,
    FooterComponent,
    MarketPriceComponent,

    MarketPriceComponent,
    SoilInfoComponent,


    HelplinesComponent,
    SchemesComponent,
    MandiComponent,
    AddressComponent,

    AddressComponent,
    ContactUsComponent





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
    ReactiveFormsModule,




  ],
  providers: [InfoService,ValidationService,


               HelplinesService, SchemesService ,SoilSchemaService , MandiService,
               HelplinesService, SchemesService ,SoilSchemaService , MandiService],

  bootstrap: [AppComponent]
})
export class AppModule { }
