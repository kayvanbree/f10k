import {Inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {SpotifyConfig} from '../definitions/spotify-config';
import {UpdateAuthenticationTokens} from '../store/actions/authentication.actions';
import {Store} from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class SpotifyRedirectGuard implements CanActivate {
  constructor(
    private http: HttpClient,
    @Inject('SpotifyConfig') private config: SpotifyConfig,
    private store: Store,
    private router: Router,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!route.queryParams) {
      return true;
    }

    const code = route.queryParams.code;

    this.http.get(`${this.config.f10kApiBase}/auth/login?code=${code}`).subscribe((value: any) => {
      console.log(value);
      this.store.dispatch(new UpdateAuthenticationTokens(
        value.access_token,
        value.refresh_token,
        value.expires_in
      ));
    });

    this.router.navigate(['/']);
    return true;
  }
}
