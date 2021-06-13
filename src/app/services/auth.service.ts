import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { KwetterUser } from '../classes/models/kwetter-user';
import { KwetterProfile } from '../classes/models/kwetter-profile';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUri = environment.endpoint + "/authentication/register";
  private loginUri = environment.endpoint + "/authentication/login";

  private jwtHelper = new JwtHelperService();

  constructor(private httpClient : HttpClient) { 

  }

  public getUser() : KwetterUser {
    let account = JSON.parse(localStorage.getItem('user'));
    return account;
  }

  public setUser(user : KwetterUser){
    localStorage.setItem('user', JSON.stringify(user));
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    return token != '';

    return !this.jwtHelper.isTokenExpired(token);
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public setToken(token : string){
    localStorage.setItem('token', token);
  }

  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
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
