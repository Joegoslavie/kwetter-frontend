import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tweet } from '../classes/models/tweet';

@Injectable({
  providedIn: 'root'
})
export class TweetServiceService {

  private postTweetUri = environment.endpoint + "/tweet/new";
  private likeUri = environment.endpoint + "/tweet/like"

  constructor(private httpClient : HttpClient) { 

  }

  public toggleLike(tweet : Tweet){
    const body = { TweetId: tweet.id};
    return this.httpClient.post(this.likeUri, body, { observe: 'response' });
  }

  public placeTweet(content : string) {
    const body = { content: content};
    return this.httpClient.post(this.postTweetUri, body, { observe: 'response' });
  }
}
