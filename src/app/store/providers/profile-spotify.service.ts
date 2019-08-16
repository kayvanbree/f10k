import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Profile} from '../../definitions/profile';
import {SpotifyConfig} from '../../definitions/spotify-config';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileSpotifyService {

  constructor(
    @Inject('SpotifyConfig') private config: SpotifyConfig,
    private http: HttpClient
  ) { }

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(`${this.config.apiBase}/me`);
  }
}
