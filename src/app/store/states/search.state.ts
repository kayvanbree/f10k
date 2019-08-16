import {Action, State, StateContext} from '@ngxs/store';
import {SearchStateModel} from '../models/search-state.model';
import {Search, SearchSuccess} from '../actions/search.actions';
import {SearchSpotifyService} from '../providers/search-spotify.service';

@State<SearchStateModel>({
  name: 'search',
  defaults: {
    query: '',
    results: null,
  }
})
export class SearchState {
  constructor(private searchService: SearchSpotifyService) {}

  @Action(Search)
  public search(ctx: StateContext<SearchStateModel>, action: Search) {
    const state = ctx.getState();
    ctx.patchState({
      ...state,
      query: action.query,
    });
    this.searchService.search(action.query, action.pageSize, action.offset, action.type).subscribe((value: any) => {
      ctx.dispatch(new SearchSuccess(value));
    });
  }

  @Action(SearchSuccess)
  public searchSuccess(ctx: StateContext<SearchStateModel>, action: SearchSuccess) {
    const state = ctx.getState();
    ctx.patchState({
      ...state,
      results: action.results,
    });
  }
}
