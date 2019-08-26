import {Inject, Injectable} from '@angular/core';
import {SpotifyConfig} from '../../definitions/spotify-config';
import {UpdateAuthenticationTokens} from '../actions/authentication.actions';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class SpotifyAuthenticationService {
  constructor(
    @Inject('SpotifyConfig') private config: SpotifyConfig,
    private http: HttpClient,
    private store: Store,
  ) { }

  login() {
    const params = {
      client_id: this.config.clientId,
      redirect_uri: this.config.redirectUri,
      scope: this.config.scope || '',
      response_type: 'code'
    };

    window.location.href = `${this.config.authorizationUrl}?${this.toQueryString(params)}`;
  }

  refreshLogin(token: string) {
    console.log('Refreshing with token ' + token);
    return this.http.get(`${this.config.f10kApiBase}/auth/refresh?token=${token}`);
  }

  private toQueryString(obj: any): string {
    const parts = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
      }
    }
    return parts.join('&');
  }
}
