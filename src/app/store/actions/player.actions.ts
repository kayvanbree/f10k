import {TrackModel} from '../models/track.model';

export class PlayTrack {
  static readonly type = '[Player] PlayTrack';
  constructor(public ids: string[], public id: string) {
  }
}

export class UpdatePlayerStatus {
  static readonly type = '[Player] UpdatePlayerStatus';
  constructor(
    public currentTrack: TrackModel,
    public duration: number,
    public position: number,
    public paused: boolean,
  ) {}
}

export class RegisterPlayer {
  static readonly type = '[Player] RegisterPlayer';
  constructor(public deviceId: string) {}
}

export class TogglePlay {
  static readonly type = '[Player] TogglePlay';
}

export class NextTrack {
  static readonly type = '[Player] NextTrack';
}

export class PreviousTrack {
  static readonly type = '[Player] PreviousTrack';
}

export class UpdateVolume {
  static readonly type = '[Player] UpdateVolume';
  constructor(public volume: number) {}
}

export class SetVolume {
  static readonly type = '[Player] SetVolume';
  constructor(public volume: number) {}
}

export class UpdateDeviceStatus {
  static readonly type = '[Player] UpdateDeviceStatus';
  constructor(public device: any) {}
}
