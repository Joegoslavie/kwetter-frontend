import { Component, OnInit } from '@angular/core';
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
  
  constructor(private service : AuthService) { 
    
  }

  ngOnInit(): void {
  }

  public register() {
    this.registerAttempted = true;
    this.emailError = this.usernameError = '';
    this.service.doRegister(this.username, this.email, this.password, this.passwordRepeat).subscribe(result => {

      let resultData : AuthenticationResult = JSON.parse(JSON.stringify(result.body));
      console.log(resultData);

    }, failure => {
      let errorData : AuthenticationResult = JSON.parse(JSON.stringify(failure.error));
      this.usernameError = errorData.message;
      console.log(errorData.errorCode);

      this.registerAttempted = false;
      this.password = this.passwordRepeat = '';
    });
  }

}
