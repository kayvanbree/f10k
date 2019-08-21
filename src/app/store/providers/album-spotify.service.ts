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

  getAlbums(ids: string[]) {
    return this.http.get(`${this.config.apiBase}/albums?ids=${ids}`);
  }

  getAlbum(id: string) {
    return this.http.get(`${this.config.apiBase}/albums/${id}`);
  }
}
