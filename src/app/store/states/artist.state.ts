import {Action, createSelector, Selector, State, StateContext} from '@ngxs/store';
import {ArtistStateModel} from '../models/artist-state.model';
import {
  GetArtist,
  GetArtistAlbums, GetArtistAlbumsSuccess,
  GetArtists,
  GetArtistsSuccess,
  GetArtistSuccess,
  RemoveArtist,
  SaveArtist
} from '../actions/artist.actions';
import {append, patch, removeItem} from '@ngxs/store/operators';
import {ArtistSpotifyService} from '../providers/artist-spotify.service';

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

  @Selector()
  static artists(state: ArtistStateModel) {
    return state.artists;
  }

  @Selector()
  static currentArtist(state: ArtistStateModel) {
    return state.currentArtist;
  }

  constructor(private artistService: ArtistSpotifyService) {}

  @Action(GetArtists)
  public getArtists(ctx: StateContext<ArtistStateModel>, action: GetArtists) {
    const start = action.page * action.pageSize;
    const end = start + action.pageSize;
    const pageIds = action.ids.slice(start, end);
    this.artistService.getArtists(pageIds).subscribe((value: any) => {
      ctx.dispatch(new GetArtistsSuccess(value.artists));
    });
  }

  @Action(GetArtistsSuccess)
  public getArtistsSuccess(ctx: StateContext<ArtistStateModel>, action: GetArtistsSuccess) {
    ctx.setState(
      patch({
        artists: action.artists,
      })
    );
  }

  @Action(GetArtist)
  public getArtist(ctx: StateContext<ArtistStateModel>, action: GetArtist) {
    const state = ctx.getState();
    ctx.patchState({
      ...state,
      currentArtistId: action.id,
    });
    this.artistService.getArtist(action.id).subscribe((value: any) => {
      ctx.dispatch(new GetArtistSuccess(value));
    });
  }

  @Action(GetArtistSuccess)
  public getArtistSuccess(ctx: StateContext<ArtistStateModel>, action: GetArtistSuccess) {
    const state = ctx.getState();
    ctx.patchState({
      ...state,
      currentArtist: action.artist,
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

  @Action(GetArtistAlbums)
  public getArtistAlbums(ctx: StateContext<ArtistStateModel>, action: GetArtistAlbums) {
    this.artistService.getArtistAlbums(action.id, action.page, action.pageSize).subscribe((value: any) => {
      ctx.dispatch(new GetArtistAlbumsSuccess(value.items, value.total));
    });
  }

  @Action(GetArtistAlbumsSuccess)
  public getArtistAlbumsSuccess(ctx: StateContext<ArtistStateModel>, action: GetArtistAlbumsSuccess) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      currentArtist: {
        ...state.currentArtist,
        albums: action.albums,
        totalAlbums: action.total,
      },
    });
  }
}
