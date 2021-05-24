import { Component, OnInit } from '@angular/core';
import { KwetterUser } from 'src/app/classes/models/kwetter-user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-timeline-page',
  templateUrl: './timeline-page.component.html',
  styleUrls: ['./timeline-page.component.css']
})
export class TimelinePageComponent implements OnInit {

  public currentUser : KwetterUser;

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.currentUser = this.authService.currentUser;
    console.log(this.currentUser);
  }

}
