import { MandiService } from './mandi.service';
import { SchemesComponent } from './schemes/schemes.component';
import { HelplinesComponent } from './helplines/helplines.component';
import { SchemesService } from './schemes.service';
import { HelplinesService } from './helplines.service';
import { InfoService } from './Info/market-price/info.service';
import { SoilSchemaService } from './soil-schema.service';
import { LoginService } from './login.service';
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
import { AdminHeaderComponent } from './auth/admin-header/admin-header.component';
import { PostHelplinesComponent } from './posts/post-helplines/post-helplines.component';
import { PostCropsComponent } from './posts/post-crops/post-crops.component';
import { PostAddressComponent } from './posts/post-address/post-address.component';
import { EnquiryComponent } from './posts/enquiry/enquiry.component';
import { MandiComponent } from './Soil/mandi/mandi.component';
// import { SoilComponent } from './posts/soil/soil.component';
import { PostSoilComponent } from './posts/post-soil/post-soil.component';
import { PostMandiComponent } from './posts/post-mandi/post-mandi.component';
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
    AdminHeaderComponent,
    PostHelplinesComponent,
    PostCropsComponent,
    PostAddressComponent,
    EnquiryComponent,
    HelplinesComponent,
    SchemesComponent,
    MandiComponent,
    // SoilComponent,
    PostSoilComponent,
    PostMandiComponent
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
              RegisterService,LoginService,AdminService  ,
               HelplinesService, SchemesService ,SoilSchemaService , MandiService],

  bootstrap: [AppComponent]
})
export class AppModule { }
