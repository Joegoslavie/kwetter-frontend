import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-kwetter-layout',
  templateUrl: './kwetter-layout.component.html',
  styleUrls: ['./kwetter-layout.component.css']
})
export class KwetterLayoutComponent implements OnInit {

  constructor(private auth : AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  public logout(){
    this.auth.logout();
  }

}
