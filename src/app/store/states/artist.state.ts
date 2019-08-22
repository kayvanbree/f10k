import {Action, createSelector, State, StateContext} from '@ngxs/store';
import {ArtistStateModel} from '../models/artist-state.model';
import {
  RemoveArtist,
  SaveArtist
} from '../actions/artist.actions';
import {append, patch, removeItem} from '@ngxs/store/operators';

@State<ArtistStateModel>({
  name: 'artists',
  defaults: {
    ids: [
      '0fHBsOHvZ9LDBZ2GaLuxxm',
      '1UsiNk3VkfrQDLuCDMxitB',
      '3ZMO6No33TsxKjkqLYgEu9',
    ],
    artists: [],
  }
})
export class ArtistState {
  static isSaved(id: string) {
    return createSelector([ArtistState], (state: ArtistStateModel) => {
      return state.ids.filter(s => s === id).length > 0;
    });
  }

  @Action(SaveArtist)
  public saveArtist(ctx: StateContext<ArtistStateModel>, action: SaveArtist) {
    ctx.setState(
      patch({
        ids: append<string>([action.id]),
      })
    );
  }

  @Action(RemoveArtist)
  public removeArtist(ctx: StateContext<ArtistStateModel>, action: RemoveArtist) {
    ctx.setState(
      patch({
        ids: removeItem<string>(name => name === action.id),
      }),
    );
  }
}
