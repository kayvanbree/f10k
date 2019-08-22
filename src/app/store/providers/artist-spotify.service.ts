import {Inject, Injectable} from '@angular/core';
import {SpotifyConfig} from '../../definitions/spotify-config';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistSpotifyService {
  constructor(
    @Inject('SpotifyConfig') private config: SpotifyConfig,
    private http: HttpClient
  ) { }

  getArtist(id: string) {
    return this.http.get(`${this.config.apiBase}/artists/${id}`);
  }

  getArtists(ids: string[], pageSize: number) {
    const artists = ids.slice(0, Math.min(pageSize, ids.length)).join();
    return this.http.get(`${this.config.apiBase}/artists?ids=${artists}`);
  }

  getArtistAlbums(id: string, page: number, pageSize: number) {
    return this.http.get(`${this.config.apiBase}/artists/${id}/albums?limit=${pageSize}&offset=${page}&market=from_token&include_groups=album`);
  }
}
