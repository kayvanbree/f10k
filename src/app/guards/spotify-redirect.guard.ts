import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UpdateAuthenticationTokens} from '../store/actions/authentication.actions';
import {Store} from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class SpotifyRedirectGuard implements CanActivate {
  constructor(private store: Store) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!route.fragment) {
      return true;
    }

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

    this.store.dispatch(new UpdateAuthenticationTokens(accessToken, tokenType, expiresIn));

    return true;
  }
}
