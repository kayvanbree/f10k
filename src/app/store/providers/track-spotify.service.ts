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

  getTrack(id: string) {
    return this.http.get(`${this.config.apiBase}/track/${id}`);
  }

  getTracks(ids: string[], pageSize: number) {
    const tracks = ids.slice(0, Math.min(pageSize, ids.length)).join();
    return this.http.get(`${this.config.apiBase}/tracks?ids=${tracks}`);
  }

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
