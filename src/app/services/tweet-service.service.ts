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
  private timelineUri = environment.endpoint + "/tweet/timeline"

  constructor(private httpClient : HttpClient) {

  }

  public getTimeline(page : number, number : number){
    return this.httpClient.get(this.timelineUri + "?page=" + page + "&amount=" + number, { observe: 'response' });
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
