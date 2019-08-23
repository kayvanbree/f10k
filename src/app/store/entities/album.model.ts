import {ArtistModel} from './artist.model';
import {SpotifyEntityModel} from './spotify-entity.model';
import {PagingModel} from './paging-model';
import {TrackModel} from './track.model';
import {ImageModel} from './image.model';

export interface AlbumModel extends SpotifyEntityModel {
  album_group?: string;
  album_type: string;
  artists: ArtistModel[];
  available_markets: string[];
  release_date: string;
  release_date_precision: string;
  restrictions: any;
  copyrights: any[];
  external_ids: any;
  genres: string[];
  images: ImageModel[];
  label: string;
  popularity: number;
  tracks: PagingModel<TrackModel>;
}
