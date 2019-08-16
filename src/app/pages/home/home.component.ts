import { Component, OnInit } from '@angular/core';
import {Profile} from '../../definitions/profile';
import {ProfileSpotifyService} from '../../store/providers/profile-spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public profile: Profile;

  constructor(
    private profileService: ProfileSpotifyService
  ) { }

  ngOnInit() {
    this.profileService.getProfile().subscribe((value) => {
      this.profile = value;
    });
  }
}
