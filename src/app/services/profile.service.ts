import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private updateUri = environment.endpoint + "/profile/update";
  private profileUri = environment.endpoint + "/profile?username="
  private followUri = environment.endpoint + '/follow'

  constructor(private httpClient : HttpClient) { }

  public updateProfile(displayName : string, description : string, location : string, websiteUrl : string){
    const body = 
    {  
      DisplayName: displayName,
      Description: description,
      Location : location,
      WebsiteUrl : websiteUrl
    };
    
    return this.httpClient.post(this.updateUri, body, { observe: 'response' });
  }

  public toggleFollow(username : string){
    const body = { Username: username};
    return this.httpClient.post(this.followUri + '/toggle', body, { observe: 'response' });
  }

  public getFollowers(username : string, page, number){
    return this.httpClient.get(this.followUri + "/followers?username=" + username + "&page=" + page + "&amount=" + number, { observe: 'response' });
  }

  public getFollowing(username : string, page, number){
    return this.httpClient.get(this.followUri + "/following?username=" + username + "&page=" + page + "&amount=" + number, { observe: 'response' });
  }

  public getProfile(username : string){
    return this.httpClient.get(this.profileUri + username, { observe: 'response' });
  }
}
