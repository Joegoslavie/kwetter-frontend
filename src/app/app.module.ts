import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';
import { LandingLayoutComponent } from './layout/landing-layout/landing-layout.component';
import { KwetterLayoutComponent } from './layout/kwetter-layout/kwetter-layout.component';
import { AuthenticationLayoutComponent } from './layout/authentication-layout/authentication-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    RegisterComponent,
    LandingComponent,
    LandingLayoutComponent,
    KwetterLayoutComponent,
    AuthenticationLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
