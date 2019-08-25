import {Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {ActivatedRoute, Router} from '@angular/router';
import {SpotifyEntityService} from '../../store/providers/spotify-entity.service';
import {PlaylistModel} from '../../store/entities/playlist.model';
import {PlayTrack} from '../../store/actions/player.actions';
import {PlaylistTrackDataSource} from '../../datasources/playlist-track-data-source';

@Component({
  selector: 'app-playlist-detail-page',
  templateUrl: './playlist-detail-page.component.html',
  styleUrls: ['./playlist-detail-page.component.scss']
})
export class PlaylistDetailPageComponent implements OnInit {
  public playlist: PlaylistModel;

  public trackDataSource: PlaylistTrackDataSource;
  public pageSize = 50;

  public columns = [
    'playlist-track-album-image',
    'playlist-track-name',
    'playlist-track-artist',
    'playlist-track-album',
    'playlist-track-popularity',
    'playlist-track-duration',
    'playlist-track-saved',
  ];

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router,
    private entityService: SpotifyEntityService,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.loadEntities(params.id);
    });
  }

  public onRowDoubleClick(event) {
    const offset: any = {
      uri: event.track.uri,
    };
    this.store.dispatch(new PlayTrack(this.playlist.uri, null, offset));
  }

  private loadEntities(id) {
    this.entityService.getEntity(id, 'playlist').subscribe((playlist: PlaylistModel) => {
      this.playlist = playlist;
      this.trackDataSource = new PlaylistTrackDataSource(this.entityService, id, 'playlist', 'track', this.pageSize);
    });
  }
}
