import {AlbumModel} from './album.model';
import {ArtistModel} from './artist.model';

export interface TrackModel {
  album: AlbumModel;
  artists: ArtistModel[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: any;
  external_urls: any;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: any;
  restrictions: any;
  name: string;
  popularity: string;
  preview_url: string;
  track_number: string;
  type: string;
  uri: string;
}
