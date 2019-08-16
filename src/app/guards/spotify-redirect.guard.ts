import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {PlayerSpotifyService} from '../store/providers/player-spotify.service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyRedirectGuard implements CanActivate {
  constructor(
    private router: Router,
    private player: PlayerSpotifyService,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let accessToken;
    let tokenType;
    let expiresIn;

    for (const fragment of route.fragment.split('&')) {
      const frags = fragment.split('=');
      if (frags[0] === 'access_token') {
        accessToken = frags[1];
      }
      if (frags[0] === 'token_type') {
        tokenType = frags[1];
      }
      if (frags[0] === 'expires_in') {
        expiresIn = frags[1];
      }
    }

    localStorage.setItem('ngx-spotify-token', accessToken);
    localStorage.setItem('ngx-spotify-token-type', tokenType);
    localStorage.setItem('ngx-spotify-token-expires', expiresIn);

    this.router.navigate(['']);
    return true;

    // this.router.navigate(['login']);
    // return false;
  }
}
