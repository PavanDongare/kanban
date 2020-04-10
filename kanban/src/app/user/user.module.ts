import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { GoogleSigninDirective } from './google-signin.directive';
import { EmailLoginComponent } from './email-login/email-login.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, GoogleSigninDirective, EmailLoginComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [LoginComponent, EmailLoginComponent]
})
export class UserModule { }
// why not just formbuilder or formgroup import?
