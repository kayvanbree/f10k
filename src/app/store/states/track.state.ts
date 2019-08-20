import {Action, createSelector, State, StateContext} from '@ngxs/store';
import {TrackStateModel} from '../models/track-state.model';
import {TrackSpotifyService} from '../providers/track-spotify.service';
import {append, patch, removeItem} from '@ngxs/store/operators';
import {
  EntityState,
  EntityStateModel,
  defaultEntityState,
  IdStrategy,
} from '@ngxs-labs/entity-state';

import {
  GetTracks,
  ImportTracks,
  ImportPlaylists, ImportPlaylistsSuccess,
  ImportTracksSuccess,
  RemoveTrack,
  SaveTrack, ImportTracksFromPlaylist, ImportTracksFromPlaylistSuccess
} from '../actions/track.actions';
import {TrackModel} from '../models/track.model';

export class NoIdGenerator<T> extends IdStrategy.IdGenerator<T> {
  constructor(idKey: keyof T) {
    super(idKey);
  }

  generateId(entity: Partial<T>, state: EntityStateModel<any>): string {
    return '';
  }
}

@State<EntityStateModel<TrackModel>>({
  name: 'tracks',
  defaults: defaultEntityState({
    pageSize: 50,
    pageIndex: 0,
  })
})
export class TrackState extends EntityState<TrackModel> {
  static isSaved(id: string) {
    return createSelector([TrackState], (state: TrackStateModel) => {
      return state.saved.filter(s => s === id).length > 0;
    });
  }

  constructor(private trackService: TrackSpotifyService) {
    super(TrackState, 'id' , NoIdGenerator);
  }

  @Action(GetTracks)
  public getTracks(ctx: StateContext<EntityStateModel<TrackModel>>, action: GetTracks) {
    this.trackService.getTracks(action.ids, action.pageSize).subscribe((value: any) => {
      this.update(ctx, { payload: value.tracks });
    });
  }

  @Action(SaveTrack)
  public saveTrack(ctx: StateContext<TrackStateModel>, action: SaveTrack) {}

  @Action(RemoveTrack)
  public removeTrack(ctx: StateContext<TrackStateModel>, action: RemoveTrack) {
    ctx.setState(
      patch({
        saved: removeItem<string>(name => name === action.id),
      }),
    );
  }

  @Action(ImportTracks)
  public importTracks(ctx: StateContext<TrackStateModel>, action: ImportTracks) {
    this.trackService.importTracks(action.offset).subscribe((value) => {
      console.log(value);
      ctx.dispatch(new ImportTracksSuccess(value));
    });
  }

  @Action(ImportTracksSuccess)
  public importTracksSuccess(ctx: StateContext<TrackStateModel>, action: ImportTracksSuccess) {
    const ids = action.importObject.items.map(x => x.track.id);
    ctx.setState(
      patch({
        saved: append<string>(ids),
      }),
    );
    if (action.importObject.next) {
      ctx.dispatch(new ImportTracks(action.importObject.offset + 50));
    }
  }

  @Action(ImportPlaylists)
  public importPlaylists(ctx: StateContext<TrackStateModel>, action: ImportPlaylists) {
    this.trackService.importPlaylists(action.offset).subscribe((value) => {
      ctx.dispatch(new ImportPlaylistsSuccess(value));
    });
  }

  @Action(ImportPlaylistsSuccess)
  public importPlaylistsSuccess(ctx: StateContext<TrackStateModel>, action: ImportPlaylistsSuccess) {
    const ids = action.importObject.items;
    ids.forEach((value) => {
      ctx.dispatch(new ImportTracksFromPlaylist(value.id, 0));
    });
    if (action.importObject.next) {
      setTimeout(() => {
        ctx.dispatch(new ImportPlaylists(action.importObject.offset + 50));
      }, 60000);
    }
  }

  @Action(ImportTracksFromPlaylist)
  public importFromPlaylistsTracks(ctx: StateContext<TrackStateModel>, action: ImportTracksFromPlaylist) {
    this.trackService.importTracksFromPlaylists(action.id, action.offset).subscribe((value) => {
      ctx.dispatch(new ImportTracksFromPlaylistSuccess(action.id, value));
    });
  }

  @Action(ImportTracksFromPlaylistSuccess)
  public importTracksFromPlaylistsSuccess(ctx: StateContext<TrackStateModel>, action: ImportTracksFromPlaylistSuccess) {
    const ids = action.importObject.items.map(x => x.track.id);
    ctx.setState(
      patch({
        ids: append<string>(ids),
      }),
    );
    if (action.importObject.next) {
      ctx.dispatch(new ImportTracksFromPlaylist(action.id, action.importObject.offset + 50));
    }
  }
}
