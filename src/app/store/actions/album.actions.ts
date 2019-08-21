import {AlbumModel} from '../models/album.model';
import {ArtistModel} from '../models/artist.model';

export class GetAlbums {
  static readonly type = '[Album] GetAlbums';
  constructor(
    public ids: string[],
    public page: number,
    public pageSize: number
  ) {}
}

export class GetAlbumsSuccess {
  static readonly type = '[Album] GetAlbumsSuccess';
  constructor(public albums: AlbumModel[]) {}
}

export class GetAlbum {
  static readonly type = '[Album] GetAlbum';
  constructor(public id: string) {}
}

export class GetAlbumSuccess {
  static readonly type = '[Album] GetAlbumSuccess';
  constructor(public album: AlbumModel) {}
}

export class SaveAlbum {
  static readonly type = '[Album] SaveAlbum';
  constructor(public id: string) {}
}

export class RemoveAlbum {
  static readonly type = '[Album] RemoveAlbum';
  constructor(public id: string) {}
}
