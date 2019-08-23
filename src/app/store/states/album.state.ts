import {Action, createSelector, State, StateContext} from '@ngxs/store';
import {AlbumStateModel} from '../models/album-state.model';
import {append, patch, removeItem} from '@ngxs/store/operators';
import {RemoveAlbum, SaveAlbum} from '../actions/album.actions';

@State<AlbumStateModel>({
  name: 'albums',
  defaults: {
    ids: [],
  }
})
export class AlbumState {
  static isSaved(id: string) {
    return createSelector([AlbumState], (state: AlbumStateModel) => {
      return state.ids.filter(s => s === id).length > 0;
    });
  }

  @Action(SaveAlbum)
  public saveAlbum(ctx: StateContext<AlbumStateModel>, action: SaveAlbum) {
    ctx.setState(
      patch({
        ids: append<string>([action.id]),
      })
    );
  }

  @Action(RemoveAlbum)
  public removeArtist(ctx: StateContext<AlbumStateModel>, action: RemoveAlbum) {
    ctx.setState(
      patch({
        ids: removeItem<string>(name => name === action.id),
      }),
    );
  }
}
