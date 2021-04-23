import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private endpointUri = "http://localhost:4200/api/authentication";

  constructor(private httpClient : HttpClient) { 

  }

  public doLogin(username : string, password : string) {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    console.log(this.endpointUri + "/login");
    return this.httpClient.post(this.endpointUri + "/login", formData, { observe: 'response' });
  }
}
