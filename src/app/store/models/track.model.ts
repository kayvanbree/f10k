import {AlbumModel} from './album.model';
import {ArtistModel} from './artist.model';
import {SpotifyEntityModel} from './spotify-entity.model';

export interface TrackModel extends SpotifyEntityModel {
  album: AlbumModel;
  artists: ArtistModel[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: any;
  is_playable: boolean;
  linked_from: any;
  restrictions: any;
  popularity: string;
  preview_url: string;
  track_number: string;
  is_local: boolean;
}
