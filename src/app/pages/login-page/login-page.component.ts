import { Component } from '@angular/core';
import {SpotifyAuthenticationService} from '../../providers/spotify-authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor(private spotifyAuthentication: SpotifyAuthenticationService) { }

  public login(): void {
    this.spotifyAuthentication.login();
  }
}
