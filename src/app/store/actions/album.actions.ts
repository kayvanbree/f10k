import {AlbumModel} from '../models/album.model';

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
