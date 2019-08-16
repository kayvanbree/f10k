import {Action, createSelector, State, StateContext} from '@ngxs/store';
import {TrackStateModel} from '../models/track-state.model';
import {TrackSpotifyService} from '../providers/track-spotify.service';
import {append, patch, removeItem} from '@ngxs/store/operators';
import {
  GetTracks,
  GetTracksSuccess,
  ImportTracks,
  ImportPlaylists, ImportPlaylistsSuccess,
  ImportTracksSuccess,
  RemoveTrack,
  SaveTrack, ImportTracksFromPlaylist, ImportTracksFromPlaylistSuccess
} from '../actions/track.actions';
import {RouterNavigation} from '@ngxs/router-plugin';
import {SearchStateModel} from '../models/search-state.model';
import {Search} from '../actions/search.actions';

@State<TrackStateModel>({
  name: 'tracks',
  defaults: {
    ids: [
      '7lT3Y2QlPs792zEfOj4b0K'
    ],
    tracks: [],
  }
})
export class TrackState {
  static isSaved(id: string) {
    return createSelector([TrackState], (state: TrackStateModel) => {
      return state.ids.filter(s => s === id).length > 0;
    });
  }

  constructor(private trackService: TrackSpotifyService) {}

  @Action(RouterNavigation)
  public routerNavigation(ctx: StateContext<TrackStateModel>, action: RouterNavigation) {
    const state = ctx.getState();
    ctx.patchState({
      ...state,
      tracks: [],
    });
  }

  @Action(GetTracks)
  public getTracks(ctx: StateContext<TrackStateModel>, action: GetTracks) {
    this.trackService.getTracks(action.ids, action.pageSize).subscribe((value: any) => {
      ctx.dispatch(new GetTracksSuccess(value.tracks));
    });
  }

  @Action(GetTracksSuccess)
  public getTracksSuccess(ctx: StateContext<TrackStateModel>, action: GetTracksSuccess) {
    ctx.setState(
      patch({
        tracks: action.tracks,
      })
    );
  }

  @Action(SaveTrack)
  public saveTrack(ctx: StateContext<TrackStateModel>, action: SaveTrack) {
    ctx.setState(
      patch({
        ids: append<string>([action.id]),
      })
    );
  }

  @Action(RemoveTrack)
  public removeTrack(ctx: StateContext<TrackStateModel>, action: RemoveTrack) {
    ctx.setState(
      patch({
        ids: removeItem<string>(name => name === action.id),
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
        ids: append<string>(ids),
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
