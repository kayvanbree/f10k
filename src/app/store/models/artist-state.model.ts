import {ArtistModel} from './artist.model';

export interface ArtistStateModel {
  ids: string[];
  artists?: ArtistModel[];
  currentArtistId?: string;
  currentArtist?: ArtistModel;
}
