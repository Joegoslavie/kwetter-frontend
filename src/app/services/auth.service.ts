import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient : HttpClient) { 

  }

  public doLogin(username : string, password : string) {
    const body = { username: username, password: password };
    return this.httpClient.post(environment.endpoint + '/authentication/login', body, { observe: 'response' });
  }

  public doRegister(username : string, email : string, password : string, passwordRpt : string) {
    const body = { username: username, email: email, password: password, passwordRepeated: passwordRpt };
    return this.httpClient.post(environment.endpoint + '/authentication/register', body, { observe: 'response' });
  }
}
