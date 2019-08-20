import {Inject, Injectable} from '@angular/core';
import {SpotifyConfig} from '../../definitions/spotify-config';

@Injectable({
  providedIn: 'root'
})
export class SpotifyAuthenticationService {
  static tokenKey = 'ngx-spotify-token';

  constructor(
    @Inject('SpotifyConfig') private config: SpotifyConfig
  ) { }

  getToken(): string {
    return localStorage.getItem(SpotifyAuthenticationService.tokenKey);
  }

  login() {
    const params = {
      client_id: this.config.clientId,
      redirect_uri: this.config.redirectUri,
      scope: this.config.scope || '',
      response_type: 'token'
    };

    window.location.href = `${this.config.authorizationUrl}?${this.toQueryString(params)}`;
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
