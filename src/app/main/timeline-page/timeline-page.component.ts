import { Component, OnInit } from '@angular/core';
import { KwetterUser } from 'src/app/classes/models/kwetter-user';
import { Tweet } from 'src/app/classes/models/tweet';
import { AuthService } from 'src/app/services/auth.service';
import { TweetServiceService } from 'src/app/services/tweet-service.service';

@Component({
  selector: 'app-timeline-page',
  templateUrl: './timeline-page.component.html',
  styleUrls: ['./timeline-page.component.css']
})
export class TimelinePageComponent implements OnInit {

  public currentUser : KwetterUser;
  public timeline : Tweet[];

  public tweetContents : string;

  constructor(private authService : AuthService, private tweetService : TweetServiceService) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getUser();
    this.tweetService.getTimeline(0, 25).subscribe(res => {
      this.timeline = JSON.parse(JSON.stringify(res.body));
      console.log(this.timeline);
    });
  }

  public placeTweet(){
    this.tweetService.placeTweet(this.tweetContents).subscribe(res => {
      let tweet : Tweet = JSON.parse(JSON.stringify(res.body));
      this.timeline.push(tweet);
      this.tweetContents = '';
    })
  }

  public likeTweet(tweet : Tweet){

    this.tweetService.toggleLike(tweet).subscribe(res => {
      let result = JSON.parse(JSON.stringify(res.body));
      console.log(result);

      if(result === true){
        tweet.liked = tweet.liked + 1;
      }
      else{
        tweet.liked = tweet.liked - 1;
      }

      console.log(tweet.liked);
    });
  }
}
