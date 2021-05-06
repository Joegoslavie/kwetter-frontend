import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthenticationResult } from '../classes/response/authentication-result';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUri = environment.endpoint + "/authentication/register";
  private loginUri = environment.endpoint + "/authentication/login";

  private currentUser : any;

  constructor(private httpClient : HttpClient) { 

  }

  public isAuthenticated(): boolean {
    // get the token
    return this.getToken() != '';
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
