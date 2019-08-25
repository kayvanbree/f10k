import {Inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationState} from '../store/states/authentication.state';
import {Store} from '@ngxs/store';
import {PlayerSpotifyService} from '../store/providers/player-spotify.service';
import {HttpClient} from '@angular/common/http';
import {SpotifyConfig} from '../definitions/spotify-config';

@Injectable({
  providedIn: 'root'
})
export class SpotifyGuard implements CanActivate {
  constructor(
    private store: Store,
    private router: Router,
    private player: PlayerSpotifyService,
    private http: HttpClient,
    @Inject('SpotifyConfig') private config: SpotifyConfig,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const authState = this.store.selectSnapshot(AuthenticationState);
    const isLoggedIn = !!authState.ngxs_spotify_access_token;

    if (isLoggedIn) {
      (window as any).waitForSpotify.then(() => {
        if (!this.player.isInitialized()) {
          this.player.initialize();
        }
      });
    } else {
      this.router.navigate(['login']);
    }

    return isLoggedIn;
  }
}
