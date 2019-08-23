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
      return state[type].filter(s => s === id).length > 0;
    });
  }

  @Action(Save)
  public save(ctx: StateContext<CollectionStateModel>, action: Save) {
    ctx.setState(
      patch({
        [action.type]: append<string>([action.id]),
      })
    );
  }

  @Action(Remove)
  public remove(ctx: StateContext<CollectionStateModel>, action: Remove) {
    ctx.setState(
      patch({
        [action.type]: removeItem<string>(name => name === action.id),
      }),
    );
  }
}
