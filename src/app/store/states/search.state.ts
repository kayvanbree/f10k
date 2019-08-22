import {Action, Selector, State, StateContext} from '@ngxs/store';
import {SearchStateModel} from '../models/search-state.model';
import {SearchSpotifyService} from '../providers/search-spotify.service';

@State<SearchStateModel>({
  name: 'search',
  defaults: {
    query: '',
    results: null,
  }
})
export class SearchState {
  @Selector()
  static tracks(state: SearchStateModel) {
    return state.results.tracks.items;
  }

  @Selector()
  static artists(state: SearchStateModel) {
    return state.results.artists.items;
  }

  @Selector()
  static albums(state: SearchStateModel) {
    return state.results.albums.items;
  }

  @Selector()
  static playlists(state: SearchStateModel) {
    return state.results.playlists.items;
  }

  constructor(private searchService: SearchSpotifyService) {}

  @Action(Search)
  public search(ctx: StateContext<SearchStateModel>, action: Search) {
    const state = ctx.getState();
    ctx.patchState({
      ...state,
      query: action.query,
    });
    this.searchService.search(action.query, action.pageSize, action.offset * action.pageSize, action.type).subscribe((value: any) => {
      ctx.dispatch(new SearchSuccess(value, action.type));
    });
  }

  @Action(SearchSuccess)
  public searchSuccess(ctx: StateContext<SearchStateModel>, action: SearchSuccess) {
    const state = ctx.getState();
    ctx.patchState({
      ...state,
      results: {
        ...state.results,
        tracks: action.results.tracks ? action.results.tracks : state.results.tracks,
        artists: action.results.artists ? action.results.artists : state.results.artists,
        albums: action.results.albums ? action.results.albums : state.results.albums,
        playlists: action.results.playlists ? action.results.playlists : state.results.playlists,
      },
    });
  }
}
