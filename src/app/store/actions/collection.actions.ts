export class Save {
  static readonly type = '[Collection] Save';
  constructor(public entityType: string, public id: string) {}
}

export class Remove {
  static readonly type = '[Collection] Remove';
  constructor(public entityType: string, public id: string) {}
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
