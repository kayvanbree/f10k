import {TrackModel} from './track.model';

export interface PlayerStateModel {
  current_track: TrackModel;
  initialized: boolean;
  device_id: string;
  position: number;
  duration: number;
  paused: boolean;
  track_list: string[];
  current_track_id: string;
}
