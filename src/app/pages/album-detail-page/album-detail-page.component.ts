import { Component, OnInit } from '@angular/core';
import {Store} from '@ngxs/store';
import {ActivatedRoute} from '@angular/router';
import {AlbumModel} from '../../store/entities/album.model';
import {PlayTrack} from '../../store/actions/player.actions';
import {SpotifyEntityService} from '../../store/providers/spotify-entity.service';
import {NestedEntityDataSource} from '../../datasources/nested-entity-data-source';

@Component({
  selector: 'app-album-detail-page',
  templateUrl: './album-detail-page.component.html',
  styleUrls: ['./album-detail-page.component.scss']
})
export class AlbumDetailPageComponent implements OnInit {
  public album: AlbumModel;

  public trackDataSource: NestedEntityDataSource;
  public pageSize = 50;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private entityService: SpotifyEntityService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.loadEntities(params.id);
    });
  }

  public onRowDoubleClick(event) {
    this.store.dispatch(new PlayTrack(event.context, event.id));
  }

  private loadEntities(id) {
    this.entityService.getEntity(id, 'album').subscribe((album: AlbumModel) => {
      this.album = album;
      this.trackDataSource = new NestedEntityDataSource(this.entityService, id, 'album', 'track', this.pageSize);
    });
  }
}
