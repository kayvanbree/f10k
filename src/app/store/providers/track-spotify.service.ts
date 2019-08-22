import {Inject, Injectable} from '@angular/core';
import {SpotifyConfig} from '../../definitions/spotify-config';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrackSpotifyService {
  constructor(
    @Inject('SpotifyConfig') private config: SpotifyConfig,
    private http: HttpClient,
  ) { }

  importTracks(offset: number) {
    let url = `${this.config.apiBase}/me/tracks?limit=50`;
    if (offset > 0) {
      url += `&offset=${offset}`;
    }
    return this.http.get(url);
  }

  importPlaylists(offset: number) {
    let url = `${this.config.apiBase}/me/playlists?limit=50`;
    if (offset > 0) {
      url += `&offset=${offset}`;
    }
    return this.http.get(url);
  }

  importTracksFromPlaylists(id: number, offset: number) {
    let url = `${this.config.apiBase}/playlists/${id}/tracks?limit=50`;
    if (offset > 0) {
      url += `&offset=${offset}`;
    }
    return this.http.get(url);
  }
}
