import { Component, OnInit } from '@angular/core';
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

  constructor(private service : AuthService) {

   }

  ngOnInit(): void {

  }

  public login(){
    this.loginAttempted = true;
    this.errorMsg = '';
    this.service.doLogin(this.username, this.password).subscribe(result => {

      console.log(result.body);

    }, failure => {
      this.errorMsg = failure.error.message;
      this.loginAttempted = false;
      this.password = '';
    });
  }

}
