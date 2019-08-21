import {SpotifyEntityModel} from './spotify-entity.model';
import {AlbumModel} from './album.model';

export interface ArtistModel extends SpotifyEntityModel {
  followers: {
    href: string;
    total: number;
  };
  genres: string[];
  images: any[];
  popularity: number;
  albums: AlbumModel[];
  totalAlbums: number;
}
