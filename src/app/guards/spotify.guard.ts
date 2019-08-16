import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {PlayerSpotifyService} from '../store/providers/player-spotify.service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyGuard implements CanActivate {
  constructor(
    private router: Router,
    private player: PlayerSpotifyService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('ngx-spotify-token')) {
      (window as any).waitForSpotify.then(() => {
        if (!this.player.isInitialized()) {
          this.player.initialize();
        }
      });
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
