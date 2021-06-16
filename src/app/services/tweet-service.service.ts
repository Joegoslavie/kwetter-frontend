import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tweet } from '../classes/models/tweet';

@Injectable({
  providedIn: 'root'
})
export class TweetServiceService {

  private tweetUri = environment.endpoint + "/tweet";
  private timelineUri = environment.endpoint + "/timeline";

  constructor(private httpClient : HttpClient) {

  }

  public getTimeline(page : number, number : number){
    return this.httpClient.get(this.timelineUri + "?page=" + page + "&amount=" + number, { observe: 'response' });
  }

  public getTweetsByUsername(username, page, number){
    return this.httpClient.get(this.tweetUri + "?username=" + username + "&page=" + page + "&amount=" + number, { observe: 'response' });
  }

  public toggleLike(tweet : Tweet){
    const body = { TweetId: tweet.id};
    return this.httpClient.post(this.tweetUri + '/like', body, { observe: 'response' });
  }

  public placeTweet(content : string) {
    const body = { content: content};
    return this.httpClient.post(this.tweetUri + '/new', body, { observe: 'response' });
  }
}
