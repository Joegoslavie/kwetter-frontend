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

  public profile : KwetterProfile;
  public myProfile : boolean = true;

  public likeClicked = false;
  public followClicked = false;
  public blockClicked = false;

  public tweetsTab = true;
  public followingTab = false;
  public followerTab = false;

  public notFound = false;

  constructor(private profileService : ProfileService, private auth : AuthService, private activatedRoute: ActivatedRoute, private router: Router, private serializer: UrlSerializer, private tweetService : TweetServiceService) { 
    
    const usr = this.activatedRoute.snapshot.paramMap.get('username');
    console.log(usr);

    if(usr != this.auth.getUser().username){
      this.myProfile = false;
      this.profileService.getProfile(usr).subscribe(resp => {
        this.profile = JSON.parse(JSON.stringify(resp.body));
      }, err => {
        this.notFound = true;
      })
    }
    else{
      this.myProfile = true;
      this.profile = this.auth.getUser().profile;
    }

    this.activatedRoute.params.subscribe(params => {
      let bla = params['username'];
      console.log(bla);
    });

  }

  ngOnInit(): void {
    const usr = this.activatedRoute.snapshot.paramMap.get('username');
    console.log(usr);
  }

  public showFollowers(){
    this.tweetsTab = this.followingTab = false;
    this.followerTab = true;
  }

  public showFollowing(){
    this.tweetsTab = this.followerTab = false;
    this.followingTab = true;

    console.log(this.profile.following);
  }

  public showTweets(){
    this.followingTab = this.followerTab = false;
    this.tweetsTab = true;
  }

  public follow(profile : KwetterProfile){
    this.followClicked = true;
    console.log(profile);
  }

  public block(profile : KwetterProfile) {
    this.blockClicked = true;
    console.log(profile);
  }

  public likeTweet(tweet : Tweet){
    
    this.likeClicked = true;

    this.tweetService.toggleLike(tweet).subscribe(res => {
      let result = JSON.parse(JSON.stringify(res.body));
      console.log(result);

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
