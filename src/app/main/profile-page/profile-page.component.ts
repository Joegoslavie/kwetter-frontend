import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSerializer } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  public followingUrl : string;
  public followersUrl : string;

  public view : string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private serializer: UrlSerializer) { 
    const usr = this.activatedRoute.snapshot.paramMap.get('username');
    this.activatedRoute.queryParams.subscribe(params => {
      this.view = params['view'];
      // retrieve data.
    });

    this.constructUrls();
  }

  private constructUrls(){
    this.followingUrl = this.serializer.serialize(this.router.createUrlTree([], { queryParams: { view: 'following' } }));
    this.followersUrl = this.serializer.serialize(this.router.createUrlTree([], { queryParams: { view: 'followers' } }));
  }

  public isActive(tab : string){
    if(!this.view && tab === 'tweets') {
      return 'active';
    } 
    else{
      return (tab === this.view) ? 'active' : '';
    }
  }

  ngOnInit(): void {
  }

}
