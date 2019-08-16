import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SpotifyRedirectGuard implements CanActivate {
  constructor(
    private router: Router,
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
  }
}
