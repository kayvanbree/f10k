import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngxs/store';
import {PlayTrack} from '../../store/actions/player.actions';
import {SearchSpotifyService} from '../../store/providers/search-spotify.service';
import {SearchDataSource} from '../../datasources/search-data-source';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  @Input() public trackDataSource: SearchDataSource;
  @Input() public artistDataSource: SearchDataSource;
  @Input() public albumDataSource: SearchDataSource;
  @Input() public playlistDataSource: SearchDataSource;

  public pageSize = 50;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private router: Router,
    private searchService: SearchSpotifyService,
    private changeDetector: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((value) => {
      this.trackDataSource = new SearchDataSource(this.searchService, value.query, this.pageSize, 'track');
      this.artistDataSource = new SearchDataSource(this.searchService, value.query, this.pageSize, 'artist');
      this.albumDataSource = new SearchDataSource(this.searchService, value.query, this.pageSize, 'album');
      this.playlistDataSource = new SearchDataSource(this.searchService, value.query, this.pageSize, 'playlist');
      this.changeDetector.detectChanges();
    });
  }

  public onTrackDoubleClick(event) {
    this.store.dispatch(new PlayTrack(this.trackDataSource.entities.map(x => x.id), event.id));
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
