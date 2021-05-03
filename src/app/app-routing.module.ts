import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [{ path: 'contact', component: ContactUsComponent },
{path: 'register' ,component: RegisterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
