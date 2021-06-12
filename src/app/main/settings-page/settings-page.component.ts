import { Component, OnInit } from '@angular/core';
import { KwetterProfile } from 'src/app/classes/models/kwetter-profile';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent implements OnInit {

  public DisplayName : string;
  public WebsiteUrl : string;
  public Location : string;
  public Description : string;

  public SuccessMessage : string;

  constructor(private profileService : ProfileService, private authService : AuthService) { }

  ngOnInit(): void {
    this.refresh();
  }

  public updateProfile(){
    this.profileService.updateProfile(this.DisplayName, this.Description, this.Location, this.WebsiteUrl).subscribe(res => {
      this.SuccessMessage = "Profile updated";
      let resultProfile : KwetterProfile = JSON.parse(JSON.stringify(res.body));

      let account = this.authService.getUser();
      account.profile = resultProfile;
      this.authService.setUser(account);
      
      this.refresh();
    });
  }

  private refresh(){
    let profile = this.authService.getUser().profile;
    this.DisplayName = profile.displayName;
    this.WebsiteUrl = profile.websiteUrl;
    this.Location = profile.location;
    this.Description = profile.description;
  }

}
