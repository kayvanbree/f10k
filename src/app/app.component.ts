import {Component, OnInit} from '@angular/core';
import {SpotifyAuthenticationService} from './providers/spotify-authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'f10k';
  public loggedIn: boolean;

  constructor(
    private spotifyAuthentication: SpotifyAuthenticationService,
  ) {}

  public ngOnInit(): void {
    this.loggedIn = this.spotifyAuthentication.isLoggedIn();
  }
}
