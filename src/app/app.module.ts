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
import { OverviewComponent } from './main/overview/overview.component';
import { ProfilePageComponent } from './main/profile-page/profile-page.component';
import { MenuComponent } from './layout/menu/menu.component';
import { SettingsPageComponent } from './main/settings-page/settings-page.component';
import { FollowingPageComponent } from './main/following-page/following-page.component';
import { FollowersPageComponent } from './main/followers-page/followers-page.component';
import { TimelinePageComponent } from './main/timeline-page/timeline-page.component';
import { PlaceTweetFormComponent } from './main/place-tweet-form/place-tweet-form.component';
import { MentionPageComponent } from './main/mention-page/mention-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInjector } from './classes/request-injector';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    RegisterComponent,
    LandingComponent,
    LandingLayoutComponent,
    KwetterLayoutComponent,
    AuthenticationLayoutComponent,
    OverviewComponent,
    ProfilePageComponent,
    MenuComponent,
    SettingsPageComponent,
    FollowingPageComponent,
    FollowersPageComponent,
    TimelinePageComponent,
    PlaceTweetFormComponent,
    MentionPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInjector,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
