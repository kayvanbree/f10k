import {CollectionStateModel} from '../models/collection-state.model';
import {Action, createSelector, State, StateContext} from '@ngxs/store';
import {append, patch, removeItem} from '@ngxs/store/operators';
import {Remove, Save} from '../actions/collection.actions';

@State<CollectionStateModel>({
  name: 'collection',
  defaults: {
    tracks: [],
    albums: [],
    artists: [],
  }
})
export class CollectionState {
  static isSaved(type: string, id: string) {
    return createSelector([CollectionState], (state: CollectionStateModel) => {
      return state[type + 's'].filter(s => s === id).length > 0;
    });
  }

  @Action(Save)
  public save(ctx: StateContext<CollectionStateModel>, action: Save) {
    switch (action.entityType) {
      case 'track':
        this.saveTrack(ctx, action);
        break;
      case 'album':
        this.saveAlbum(ctx, action);
        break;
      case 'artist':
        this.saveArtist(ctx, action);
        break;
    }
  }

  @Action(Remove)
  public remove(ctx: StateContext<CollectionStateModel>, action: Remove) {
    switch (action.entityType) {
      case 'track':
        this.removeTrack(ctx, action);
        break;
      case 'album':
        this.removeAlbum(ctx, action);
        break;
      case 'artist':
        this.removeArtist(ctx, action);
        break;
    }
  }

  private saveTrack(ctx, action) {
    ctx.setState(
      patch({
        tracks: append<string>([action.id]),
      })
    );
  }

  private removeTrack(ctx, action) {
    ctx.setState(
      patch({
        tracks: removeItem<string>(name => name === action.id),
      }),
    );
  }

  private saveAlbum(ctx, action) {
    ctx.setState(
      patch({
        albums: append<string>([action.id]),
      })
    );
  }

  private removeAlbum(ctx, action) {
    ctx.setState(
      patch({
        albums: removeItem<string>(name => name === action.id),
      }),
    );
  }

  private saveArtist(ctx, action) {
    ctx.setState(
      patch({
        artists: append<string>([action.id]),
      })
    );
  }

  private removeArtist(ctx, action) {
    ctx.setState(
      patch({
        artists: removeItem<string>(name => name === action.id),
      }),
    );
  }
}
