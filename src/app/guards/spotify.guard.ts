import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationState} from '../store/states/authentication.state';
import {Store} from '@ngxs/store';
import {PlayerSpotifyService} from '../store/providers/player-spotify.service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyGuard implements CanActivate {
  constructor(
    private store: Store,
    private router: Router,
    private player: PlayerSpotifyService,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLoggedIn = this.store.selectSnapshot(AuthenticationState.isLoggedIn);

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
