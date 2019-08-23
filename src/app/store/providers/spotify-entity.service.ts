import {Inject, Injectable} from '@angular/core';
import {SpotifyConfig} from '../../definitions/spotify-config';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyEntityService {
  constructor(
    @Inject('SpotifyConfig') private config: SpotifyConfig,
    private http: HttpClient,
  ) { }

  /**
   * Get one entity at API root
   */
  public getEntity(id: string, type: string) {
    return this.http.get(`${this.config.apiBase}/${type}s/${id}?market=from_token`);
  }

  /**
   * Get a list of entities at API root
   */
  public getEntities(ids: string[], type: string, pageSize: number) {
    const entities = this.getFirstPage(ids, pageSize);
    return this.http.get(`${this.config.apiBase}/${type}s?ids=${entities}&market=from_token`);
  }

  /**
   * Get a list of entities from another entity
   */
  public getNestedEntities(id: string, parentType: string, type: string, page: number, pageSize: number) {
    const offset = page * pageSize;
    return this.http.get(`${this.config.apiBase}/${parentType}s/${id}/${type}s?limit=${pageSize}&offset=${offset}&market=from_token`);
  }

  /**
   * Get a list of entities from /me
   */
  public getProfileEntities(type: string, page: number, pageSize: number) {
    const offset = page * pageSize;
    return this.http.get(`${this.config.apiBase}/me/${type}s?limit=${pageSize}&offset=${offset}&market=from_token`);
  }

  private getFirstPage(ids: string[], pageSize: number) {
    return ids.slice(0, Math.min(pageSize, ids.length)).join();
  }
}
