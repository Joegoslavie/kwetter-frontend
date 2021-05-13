import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KwetterUser } from '../classes/models/kwetter-user';
import { AuthenticationResult } from '../classes/response/authentication-result';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public username : string;
  public password : string;

  public errorMsg : string;
  public loginAttempted = false;

  constructor(private service : AuthService, private router : Router) {

   }

  ngOnInit(): void {

  }

  public login() {
    this.loginAttempted = true;
    this.errorMsg = '';
    this.service.doLogin(this.username, this.password).subscribe(result => {

      let resultData : AuthenticationResult = JSON.parse(JSON.stringify(result.body));
      let account : KwetterUser = resultData.account;

      this.service.setToken(account.token);
      this.router.navigate(['timeline']);

    }, failure => {
      let errorData : AuthenticationResult = JSON.parse(JSON.stringify(failure.error));
      this.errorMsg = errorData.message;

      this.loginAttempted = false;
      this.password = '';
    });
  }

}
