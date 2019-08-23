import {TrackModel} from '../entities/track.model';
import {DeviceModel} from '../entities/device.model';

export interface PlayerStateModel {
  current_track: TrackModel;
  initialized: boolean;
  device_id: string;
  position: number;
  duration: number;
  paused: boolean;
  track_list: string[];
  current_track_id: string;
  volume: number;
  device: DeviceModel;
}
