import {CollectionStateModel} from '../models/collection-state.model';
import {Action, createSelector, Selector, State, StateContext} from '@ngxs/store';
import {append, patch, removeItem} from '@ngxs/store/operators';
import {
  ImportPlaylists,
  ImportPlaylistsSuccess,
  ImportTracks,
  ImportTracksFromPlaylist, ImportTracksFromPlaylistSuccess,
  ImportTracksSuccess,
  Remove,
  Save
} from '../actions/collection.actions';
import {TrackSpotifyService} from '../providers/track-spotify.service';
import {TrackStateModel} from '../models/track-state.model';

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

  @Selector()
  static tracks(state: CollectionStateModel) {
    return state.tracks;
  }

  @Selector()
  static albums(state: CollectionStateModel) {
    return state.albums;
  }

  @Selector()
  static artists(state: CollectionStateModel) {
    return state.artists;
  }

  constructor(private trackService: TrackSpotifyService) {}

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

  @Action(ImportTracks)
  public importTracks(ctx: StateContext<TrackStateModel>, action: ImportTracks) {
    this.trackService.importTracks(action.offset).subscribe((value) => {
      ctx.dispatch(new ImportTracksSuccess(value));
    });
  }

  @Action(ImportTracksSuccess)
  public importTracksSuccess(ctx: StateContext<TrackStateModel>, action: ImportTracksSuccess) {
    const ids = action.importObject.items.map(x => x.track.id);
    ctx.setState(
      patch({
        tracks: append<string>(ids),
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
