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

  getAlbums(ids: string[], pageSize: number) {
    const albums = ids.slice(0, Math.min(pageSize, ids.length)).join();
    console.log(albums);
    return this.http.get(`${this.config.apiBase}/albums?ids=${albums}`);
  }

  getAlbum(id: string) {
    return this.http.get(`${this.config.apiBase}/albums/${id}`);
  }
}
