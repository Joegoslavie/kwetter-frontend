import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { LandingLayoutComponent } from './layout/landing-layout/landing-layout.component';
import { KwetterLayoutComponent } from './layout/kwetter-layout/kwetter-layout.component';
import { AuthenticationLayoutComponent } from './layout/authentication-layout/authentication-layout.component';
import { OverviewComponent } from './main/overview/overview.component';
import { ProfilePageComponent } from './main/profile-page/profile-page.component';
import { TimelinePageComponent } from './main/timeline-page/timeline-page.component';
import { SettingsPageComponent } from './main/settings-page/settings-page.component';
import { MentionPageComponent } from './main/mention-page/mention-page.component';
import { JwtGuardService as AuthGuard } from './services/jwt-guard.service';
import { JwtHelperService } from '@auth0/angular-jwt';
// add components

const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: LandingLayoutComponent,  children: [{ path: '', component: LandingComponent },] }, 
  { path: 'login', component: AuthenticationLayoutComponent, children: [{ path: '', component: SignInComponent }]},
  { path: 'register', component: AuthenticationLayoutComponent, children: [{ path: '', component: RegisterComponent }]},

  { path: 'timeline', canActivate: [AuthGuard], component: KwetterLayoutComponent, children: [{ path: '', component: TimelinePageComponent }]},
  { path: 'profile/:username', canActivate: [AuthGuard], component: KwetterLayoutComponent, children: [{ path: '', component: ProfilePageComponent }]},
  { path: 'mentions', canActivate: [AuthGuard], component: KwetterLayoutComponent, children: [{ path: '', component: MentionPageComponent }]},
  { path: 'settings', canActivate: [AuthGuard], component: KwetterLayoutComponent, children: [{ path: '', component: SettingsPageComponent }]},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
