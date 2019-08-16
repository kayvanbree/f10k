import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngxs/store';
import {Search} from '../../store/actions/search.actions';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  public trackIds: string[];
  public trackTotal: number;
  public trackResults: any;

  public artistIds: string[];
  public artistTotal: number;
  public artistResults: any;

  public results: any;

  public pageSize = 10;

  private query: string;
  public searching = false;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((value) => {
      this.query = value.query;
      this.store.dispatch(new Search(this.query, this.pageSize, 0, [
        'album',
        'artist',
        'track',
        'playlist',
      ]));
      this.searching = true;
    });

    this.store.select(state => state.search.results).subscribe((value) => {
      if (value) {
        if (value.tracks) {
          this.trackResults = value.tracks;
          this.trackIds = value.tracks.items.map(x => x.id);
          this.trackTotal = value.tracks.total;
        }

        if (value.artists) {
          this.artistResults = value.artists;
          this.artistIds = value.artists.items.map(x => x.id);
          this.artistTotal = value.artists.total;
        }
      }
    });
  }

  onPageChange(offset: number, type: string) {
    this.store.dispatch(new Search(this.query, this.pageSize, offset, [type]));
  }
}
