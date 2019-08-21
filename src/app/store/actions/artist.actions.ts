import {ArtistModel} from '../models/artist.model';

export class GetArtists {
  static readonly type = '[Artist] GetArtists';
  constructor(
    public ids: string[],
    public page: number,
    public pageSize: number
  ) {}
}

export class GetArtistsSuccess {
  static readonly type = '[Artist] GetArtistsSuccess';
  constructor(public artists: ArtistModel[]) {}
}

export class GetArtist {
  static readonly type = '[Artist] GetArtist';
  constructor(public id: string) {}
}

export class GetArtistSuccess {
  static readonly type = '[Artist] GetArtistSuccess';
  constructor(public artist: ArtistModel) {}
}

export class SaveArtist {
  static readonly type = '[Artist] SaveArtist';
  constructor(public id: string) {}
}

export class RemoveArtist {
  static readonly type = '[Artist] RemoveArtist';
  constructor(public id: string) {}
}
