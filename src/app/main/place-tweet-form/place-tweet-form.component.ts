import { Component, OnInit } from '@angular/core';
import { TweetServiceService } from 'src/app/services/tweet-service.service';

@Component({
  selector: 'app-place-tweet-form',
  templateUrl: './place-tweet-form.component.html',
  styleUrls: ['./place-tweet-form.component.css']
})
export class PlaceTweetFormComponent implements OnInit {

  public content : string;

  constructor(private tweetService : TweetServiceService) { }

  ngOnInit(): void {
  }

  public placeTweet(){
    this.tweetService.placeTweet(this.content).subscribe(res => {
      console.log(res);
    })
  }

}
