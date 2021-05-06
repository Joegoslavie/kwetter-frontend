import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUri = environment.endpoint + "/authentication/register";
  private loginUri = environment.endpoint + "/authentication/login";

  private currentUser : any;
  private jwtHelper = new JwtHelperService();

  constructor(private httpClient : HttpClient) { 

  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    return false;
    
    return !this.jwtHelper.isTokenExpired(token);
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public set(token : string){
    console.log('token received', token);
    localStorage.setItem('token', token);
  }

  public doRegister(username : string, email : string, password : string, passwordRpt : string) {
    const body = { username: username, email: email, password: password, passwordRepeated: passwordRpt };
    return this.httpClient.post(this.registerUri, body, { observe: 'response' });
  }

  public doLogin(username : string, password : string) {
    const body = { username: username, password: password };
    return this.httpClient.post(this.loginUri, body, { observe: 'response' });
  }
}
