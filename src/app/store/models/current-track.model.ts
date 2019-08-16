import {ArtistModel} from './artist.model';
import {AlbumModel} from './album.model';

export interface CurrentTrackModel {
  album: AlbumModel;
  artists: ArtistModel[];
  duration_ms: number;
  id: string;
  is_playable: boolean;
  linked_from: any;
  linked_from_uri: any;
  media_type: string;
  name: string;
  type: string;
  uri: string;
}
