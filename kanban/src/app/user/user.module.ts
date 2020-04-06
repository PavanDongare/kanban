import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { GoogleSigninDirective } from './google-signin.directive';


@NgModule({
  declarations: [LoginComponent, GoogleSigninDirective],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  exports: [LoginComponent]
})
export class UserModule { }
