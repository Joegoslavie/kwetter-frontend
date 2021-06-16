import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSerializer } from '@angular/router';
import { KwetterProfile } from 'src/app/classes/models/kwetter-profile';
import { Tweet } from 'src/app/classes/models/tweet';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';
import { TweetServiceService } from 'src/app/services/tweet-service.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  public myPage : boolean;
  public username : string;

  public profile : KwetterProfile;
  public following : KwetterProfile[] = [];
  public followers : KwetterProfile[] = [];
  public tweets : Tweet[];

  public likeClicked = false;
  public followClicked = false;
  public blockClicked = false;

  public tweetsTab = true;
  public followingTab = false;
  public followerTab = false;

  constructor(private profileService : ProfileService, private auth : AuthService, private activatedRoute: ActivatedRoute, private router: Router, private serializer: UrlSerializer, private tweetService : TweetServiceService) { 
    this.activatedRoute.params.subscribe(params => {
      this.username = params['username'];
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    console.log('retrieving profile of ' + this.username);
    this.myPage = this.username == this.auth.getUser().username;
    
    this.profileService.getProfile(this.username).subscribe(res => {
      this.profile = JSON.parse(JSON.stringify(res.body));
    });

    this.tweetService.getTweetsByUsername(this.username, 0, 25).subscribe(res => {
      this.tweets = JSON.parse(JSON.stringify(res.body));
    });

    this.profileService.getFollowers(this.username, 0, 25).subscribe(res => {
      this.followers = JSON.parse(JSON.stringify(res.body));
    });
 
    this.profileService.getFollowing(this.username, 0, 25).subscribe(res => {
      this.following = JSON.parse(JSON.stringify(res.body));
    });
  }

  public showFollowers(){
    this.tweetsTab = this.followingTab = false;
    this.followerTab = true;
  }

  public showFollowing(){
    this.tweetsTab = this.followerTab = false;
    this.followingTab = true;
  }

  public showTweets(){
    this.followingTab = this.followerTab = false;
    this.tweetsTab = true;
  }

  public follow(profile : KwetterProfile){
    this.followClicked = true;
    this.profileService.toggleFollow(this.username).subscribe(res => {
      let status = JSON.parse(JSON.stringify(res.body));
      console.log(status);
      this.ngOnInit();
      this.followClicked = false;
    });
  }

  public block(profile : KwetterProfile) {
    this.blockClicked = true;
    console.log(profile);
  }

  public likeTweet(tweet : Tweet){

    this.likeClicked = true;
    this.tweetService.toggleLike(tweet).subscribe(res => {
      let result = JSON.parse(JSON.stringify(res.body));
      if(result === true){
        tweet.liked += 1;
      }
      else{
        tweet.liked -+ 1;
      }
      this.likeClicked = false;
    });
  }

}
