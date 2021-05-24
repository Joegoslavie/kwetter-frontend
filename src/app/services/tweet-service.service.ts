import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TweetServiceService {

  private postTweetUri = environment.endpoint + "/tweet/new";

  constructor(private httpClient : HttpClient) { 

  }

  public placeTweet(content : string) {
    const body = { content: content};
    return this.httpClient.post(this.postTweetUri, body, { observe: 'response' });
  }
}
