import { Component, OnInit } from '@angular/core';
import {Store} from '@ngxs/store';
import {ActivatedRoute} from '@angular/router';
import {AlbumModel} from '../../store/models/album.model';
import {GetAlbum} from '../../store/actions/album.actions';
import {LoadRequestEvent} from '../../components/entity-list/entity-list.component';
import {GetTracks} from '../../store/actions/track.actions';
import {TrackState} from '../../store/states/track.state';
import {PlayTrack} from '../../store/actions/player.actions';
import {TrackModel} from '../../store/models/track.model';
import {AlbumState} from '../../store/states/album.state';

@Component({
  selector: 'app-album-detail-page',
  templateUrl: './album-detail-page.component.html',
  styleUrls: ['./album-detail-page.component.scss']
})
export class AlbumDetailPageComponent implements OnInit {
  public album: AlbumModel;
  public trackIds: string[];
  public selector = TrackState.tracks;
  public pageSize = 50;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((value) => {
      this.store.dispatch(new GetAlbum(value.id));
    });

    this.store.select(AlbumState.currentAlbum).subscribe((value: AlbumModel) => {
      this.album = value;
      this.trackIds = this.album.tracks.items.map(x => x.id);
      this.onLoadRequest({page: 0, pageSize: this.pageSize});
    });
  }

  onLoadRequest(event: LoadRequestEvent) {
    this.store.dispatch(new GetTracks(this.trackIds, event.page, event.pageSize));
  }

  onRowDoubleClick(event: TrackModel) {
    this.store.dispatch(new PlayTrack(this.trackIds, event.id));
  }
}
