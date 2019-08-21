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

  search(query: string, pageSize: number, page: number, type: string[]): Observable<any> {
    const offset = page * pageSize;
    return this.http.get(`${this.config.apiBase}/search?q=${query}&type=${type}&market=from_token&limit=${pageSize}&offset=${offset}`);
  }
}
