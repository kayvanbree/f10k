import {TrackModel} from './track.model';

export interface PlaylistTrackModel {
  track: TrackModel;
  added_at: string;
  added_by: any;
  is_local: boolean;
  primary_color: any;
}
