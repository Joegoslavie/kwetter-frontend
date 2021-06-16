import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/app/classes/models/tweet';
import { AuthService } from 'src/app/services/auth.service';
import { MentionService } from 'src/app/services/mention.service';

@Component({
  selector: 'app-mention-page',
  templateUrl: './mention-page.component.html',
  styleUrls: ['./mention-page.component.css']
})
export class MentionPageComponent implements OnInit {

  public mentions : Tweet[];

  constructor(private mentionService : MentionService, private auth : AuthService) { }

  ngOnInit(): void {
    this.mentionService.getMentionsByUsername(this.auth.getUser().username, 0, 25).subscribe(res =>{
      this.mentions = JSON.parse(JSON.stringify(res.body));
    });
  }
}
