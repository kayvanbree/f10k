import {TrackModel} from '../models/track.model';

export class GetTracks {
  static readonly type = '[Track] GetTracks';
  constructor(
    public ids: string[],
    public pageSize: number
  ) {}
}

export class GetTracksSuccess {
  static readonly type = '[Track] GetTracksSuccess';
  constructor(public tracks: TrackModel[]) {}
}

export class SaveTrack {
  static readonly type = '[Track] SaveTrack';
  constructor(public id: string) {}
}

export class RemoveTrack {
  static readonly type = '[Track] RemoveTrack';
  constructor(public id: string) {}
}

export class ImportTracks {
  static readonly type = '[Track] ImportTracks';
  constructor(public offset: number) {}
}

export class ImportTracksSuccess {
  static readonly type = '[Track] ImportTracksSuccess';
  constructor(public importObject: any) {}
}

export class ImportPlaylists {
  static readonly type = '[Track] ImportPlaylists';
  constructor(public offset: number) {}
}

export class ImportPlaylistsSuccess {
  static readonly type = '[Track] ImportPlaylistsSuccess';
  constructor(public importObject: any) {}
}

export class ImportTracksFromPlaylist {
  static readonly type = '[Track] ImportTracksFromPlaylist';
  constructor(
    public id: number,
    public offset: number,
  ) {}
}

export class ImportTracksFromPlaylistSuccess {
  static readonly type = '[Track] ImportTracksFromPlaylistSuccess';
  constructor(
    public id: number,
    public importObject: any,
  ) {}
}
