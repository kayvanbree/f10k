import { Component, OnInit } from '@angular/core';
import {Store} from '@ngxs/store';
import {ActivatedRoute, Router} from '@angular/router';
import {GetArtist, GetArtistAlbums} from '../../store/actions/artist.actions';
import {ArtistModel} from '../../store/models/artist.model';
import {LoadRequestEvent} from '../../components/entity-list/entity-list.component';
import {PlayTrack} from '../../store/actions/player.actions';
import {AlbumModel} from '../../store/models/album.model';
import {AlbumState} from '../../store/states/album.state';
import {GetAlbums} from '../../store/actions/album.actions';
import {ArtistState} from '../../store/states/artist.state';

@Component({
  selector: 'app-artist-detail-page',
  templateUrl: './artist-detail-page.component.html',
  styleUrls: ['./artist-detail-page.component.scss']
})
export class ArtistDetailPageComponent implements OnInit {
  public artist: ArtistModel;
  public albumIds: string[];
  public albumsSelector = AlbumState.albums;
  public pageSize = 50;
  public total: number;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((value) => {
      this.store.dispatch(new GetArtist(value.id));
      this.store.dispatch(new GetArtistAlbums(value.id, 0, this.pageSize));
    });

    this.store.select(ArtistState.currentArtist).subscribe((value: ArtistModel) => {
      this.artist = value ? value : this.artist;
      if (this.artist && this.artist.albums) {
        this.albumIds = this.artist.albums.map(x => x.id);
        this.total = this.artist.totalAlbums;
        this.onLoadRequest({page: 0, pageSize: this.pageSize});
      }
    });
  }

  onLoadRequest(event: LoadRequestEvent) {
    this.store.dispatch(new GetAlbums(this.albumIds, event.page, event.pageSize));
  }

  onRowDoubleClick(event: AlbumModel) {
    this.router.navigate(['album', event.id]);
  }
}
