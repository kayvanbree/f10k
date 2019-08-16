import {Inject, Injectable} from '@angular/core';
import {SpotifyConfig} from '../../definitions/spotify-config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchSpotifyService {
  constructor(
    @Inject('SpotifyConfig') private config: SpotifyConfig,
    private http: HttpClient
  ) { }

  search(query: string, limit: number, offset: number, type: string[]): Observable<any> {
    return this.http.get(`${this.config.apiBase}/search?q=${query}&type=${type}&market=from_token&limit=${limit}&offset=${offset}`);
  }
}
