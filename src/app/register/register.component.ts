import { Component, OnInit } from '@angular/core';
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

  public errorMsg : string;
  
  constructor(private service : AuthService) { 

  }

  ngOnInit(): void {
  }

  public register(){
    let result = this.service.doRegister(this.username, this.email, this.password, this.passwordRepeat);
  }

}
