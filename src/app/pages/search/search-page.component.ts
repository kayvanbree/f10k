import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngxs/store';
import {Search} from '../../store/actions/search.actions';
import {SearchState} from '../../store/states/search.state';
import {LoadRequestEvent} from '../../components/entity-list/entity-list.component';
import {PlayTrack} from '../../store/actions/player.actions';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  public trackIds: string[];
  public trackTotal: number;
  public tracksSelector = SearchState.tracks;

  public artistIds: string[];
  public artistTotal: number;
  public artistSelector = SearchState.artists;

  public albumIds: string[];
  public albumTotal: number;
  public albumSelector = SearchState.albums;

  public playlistIds: string[];
  public playlistTotal: number;
  public playlistSelector = SearchState.playlists;

  public pageSize = 50;

  private query: string;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private router: Router,
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
    });

    this.store.select(state => state.search.results).subscribe((value) => {
      if (value) {
        if (value.tracks) {
          this.trackIds = value.tracks.items.map(x => x.id);
          this.trackTotal = value.tracks.total;
        }

        if (value.artists) {
          this.artistIds = value.artists.items.map(x => x.id);
          this.artistTotal = value.artists.total;
        }

        if (value.albums) {
          this.albumIds = value.albums.items.map(x => x.id);
          this.albumTotal = value.albums.total;
        }

        if (value.playlists) {
          this.playlistIds = value.playlists.items.map(x => x.id);
          this.playlistTotal = value.playlists.total;
        }
      }
    });
  }

  public onLoadRequest(event: LoadRequestEvent, type: string) {
    this.store.dispatch(new Search(this.query, event.pageSize, event.page, [type]));
  }

  public onTrackDoubleClick(event) {
    const start = event.page * event.pageSize;
    const end = start + event.pageSize;
    const pageIds = this.trackIds.slice(start, end);
    this.store.dispatch(new PlayTrack(pageIds, event.id));
  }

  public onArtistDoubleClick(event) {
    this.router.navigate(['artist', event.id]);
  }

  public onAlbumDoubleClick(event) {
    this.router.navigate(['album', event.id]);
  }

  public onPlaylistDoubleClick(event) {
    this.router.navigate(['playlist', event.id]);
  }
}
