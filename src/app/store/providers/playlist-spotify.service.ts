import {Inject, Injectable} from '@angular/core';
import {SpotifyConfig} from '../../definitions/spotify-config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistSpotifyService {
  constructor(
    @Inject('SpotifyConfig') private config: SpotifyConfig,
    private http: HttpClient
  ) { }

  getPlaylists(): Observable<any> {
    return this.http.get<any>(`${this.config.apiBase}/me/playlists`);
  }
}
