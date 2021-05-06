import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class JwtGuardService {

  constructor(private auth : AuthService, private router: Router) { }

  public canActivate() : boolean {
    if(!this.auth.isAuthenticated()){
      this.router.navigate(['login']);
    }

    return true;
  }
}
