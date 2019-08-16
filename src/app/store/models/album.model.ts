import {ArtistModel} from './artist.model';

export interface AlbumModel {
  album_group?: string;
  album_type: string;
  artists: ArtistModel[];
  available_markets: string[];
  external_urls: any[];
  href: string;
  id: string;
  images: any[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions: any;
  type: string;
  uri: string;
}
