import {SpotifyEntityModel} from './spotify-entity.model';
import {PagingModel} from './paging-model';
import {TrackModel} from './track.model';
import {ImageModel} from './image.model';

export interface PlaylistModel extends SpotifyEntityModel {
  collaborative: boolean;
  description: string;
  followers: any;
  owner: any;
  public: boolean;
  snapshot_id: string;
  tracks: PagingModel<TrackModel>;
  images: ImageModel[];
}
