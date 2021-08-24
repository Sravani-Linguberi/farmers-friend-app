import { TokenInterceptorService } from './token-interceptor.service';
import { AuthGuard } from './components/guard/auth.guard';
import { UserRequestInterceptor } from './auth/user.request.interceptor';
import { ContactUsService } from './contact-us.service';
import { MandiService } from './mandi.service';
import { SchemesComponent } from './components/schemes/schemes.component';
import { HelplinesComponent } from './components/helplines/helplines.component';
import { SchemesService } from './schemes.service';
import { HelplinesService } from './helplines.service';
import { InfoService } from './components/market-price/info.service';
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
import { MarketPriceComponent } from './components/market-price/market-price.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { AdminComponent } from './components/admin/admin.component';
import { AdminService } from './admin.service';
import { SoilInfoComponent } from './components/soil-info/soil-info.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { PostHelplinesComponent } from './posts/post-helplines/post-helplines.component';
import { PostCropsComponent } from './posts/post-crops/post-crops.component';
import { PostAddressComponent } from './posts/post-address/post-address.component';
import { EnquiryComponent } from './posts/enquiry/enquiry.component';
import { MandiComponent } from './components/mandi/mandi.component';
import { AddressComponent } from './components/address/address.component';
// import { SoilComponent } from './posts/soil/soil.component';
import { PostSoilComponent } from './posts/post-soil/post-soil.component';
import { PostMandiComponent } from './posts/post-mandi/post-mandi.component';
import { CropComponent } from './components/crop/crop.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { VisualizationComponent } from './components/visualization/visualization.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { AdminFooterComponent } from './components/admin-footer/admin-footer.component';
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
    AddressComponent,
    // SoilComponent,
    PostSoilComponent,
    PostMandiComponent,
    AddressComponent,
    CropComponent,
    AdminHomeComponent,
    VisualizationComponent,
    ChatbotComponent,
    AdminFooterComponent
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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
              RegisterService,LoginService,AdminService  ,
               HelplinesService, SchemesService ,SoilSchemaService , MandiService,AuthGuard,
               HelplinesService, SchemesService ,SoilSchemaService , MandiService, ContactUsService],

  bootstrap: [AppComponent]
})
export class AppModule { }
