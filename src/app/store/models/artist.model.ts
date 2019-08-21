import {SpotifyEntityModel} from './spotify-entity.model';

export interface ArtistModel extends SpotifyEntityModel {
  followers: {
    href: string;
    total: number;
  };
  genres: string[];
  images: any[];
  popularity: number;
}
