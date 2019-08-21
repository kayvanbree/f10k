import {Action, createSelector, Selector, State, StateContext} from '@ngxs/store';
import {AlbumSpotifyService} from '../providers/album-spotify.service';
import {AlbumStateModel} from '../models/album-state.model';
import {append, patch, removeItem} from '@ngxs/store/operators';
import {GetAlbum, GetAlbums, GetAlbumsSuccess, GetAlbumSuccess, RemoveAlbum, SaveAlbum} from '../actions/album.actions';

@State<AlbumStateModel>({
  name: 'albums',
  defaults: {
    ids: [],
    albums: [],
  }
})
export class AlbumState {
  static isSaved(id: string) {
    return createSelector([AlbumState], (state: AlbumStateModel) => {
      return state.ids.filter(s => s === id).length > 0;
    });
  }

  @Selector()
  static albums(state: AlbumStateModel) {
    return state.albums;
  }

  @Selector()
  static currentAlbum(state: AlbumStateModel) {
    return state.currentAlbum;
  }

  constructor(private albumService: AlbumSpotifyService) {}

  @Action(GetAlbums)
  public getAlbums(ctx: StateContext<AlbumStateModel>, action: GetAlbums) {
    const start = action.page * action.pageSize;
    const end = start + action.pageSize;
    const pageIds = action.ids.slice(start, end);
    this.albumService.getAlbums(pageIds).subscribe((value: any) => {
      ctx.dispatch(new GetAlbumsSuccess(value.albums));
    });
  }

  @Action(GetAlbumsSuccess)
  public getAlbumsSuccess(ctx: StateContext<AlbumStateModel>, action: GetAlbumsSuccess) {
    ctx.setState(
      patch({
        albums: action.albums,
      })
    );
  }

  @Action(GetAlbum)
  public getArtist(ctx: StateContext<AlbumStateModel>, action: GetAlbum) {
    const state = ctx.getState();
    ctx.patchState({
      ...state,
      currentAlbumId: action.id,
    });
    this.albumService.getAlbum(action.id).subscribe((value: any) => {
      ctx.dispatch(new GetAlbumSuccess(value));
    });
  }

  @Action(GetAlbumSuccess)
  public getArtistSuccess(ctx: StateContext<AlbumStateModel>, action: GetAlbumSuccess) {
    const state = ctx.getState();
    ctx.patchState({
      ...state,
      currentAlbum: action.album,
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
