import {Inject, Injectable} from '@angular/core';
import {SpotifyConfig} from '../../definitions/spotify-config';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumSpotifyService {
  constructor(
    @Inject('SpotifyConfig') private config: SpotifyConfig,
    private http: HttpClient
  ) { }

  getAlbums() {
    return this.http.get(`${this.config.apiBase}/albums`);
  }

  getAlbum(album: string) {
    return this.http.get(`${this.config.apiBase}/albums/${album}`);
  }
}
