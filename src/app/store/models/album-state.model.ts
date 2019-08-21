import {AlbumModel} from './album.model';

export interface AlbumStateModel {
  ids: string[];
  albums?: AlbumModel[];
  currentAlbumId?: string;
  currentAlbum?: AlbumModel;
}
