import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KwetterUser } from '../classes/models/kwetter-user';
import { AuthenticationResult } from '../classes/response/authentication-result';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public username : string;
  public email : string;
  public password : string;
  public passwordRepeat : string;

  public registerAttempted = false;
  public emailError : string;
  public usernameError : string;
  
  constructor(private service : AuthService, private router : Router) { 
    
  }

  ngOnInit(): void {
  }

  public register() {
    this.registerAttempted = true;
    this.emailError = this.usernameError = '';
    this.service.doRegister(this.username, this.email, this.password, this.passwordRepeat).subscribe(result => {

      let resultData : AuthenticationResult = JSON.parse(JSON.stringify(result.body));
      let account : KwetterUser = resultData.account;
      this.service.setUser(account);
      
      this.service.setToken(account.token);
      this.router.navigate(['timeline']);

    }, failure => {
      let errorData : AuthenticationResult = JSON.parse(JSON.stringify(failure.error));
      this.usernameError = errorData.message;
      console.log(errorData.errorCode);

      this.registerAttempted = false;
      this.password = this.passwordRepeat = '';
    });
  }

}
