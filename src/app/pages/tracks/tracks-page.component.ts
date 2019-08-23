import {Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {PlayTrack} from '../../store/actions/player.actions';
import {EntityDataSource} from '../../datasources/entity-data-source';
import {SpotifyEntityService} from '../../store/providers/spotify-entity.service';
import {CollectionState} from '../../store/states/collection.state';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.scss']
})
export class TracksPageComponent implements OnInit {
  public pageSize = 50;
  public dataSource: EntityDataSource;

  constructor(
    private store: Store,
    private entityService: SpotifyEntityService,
  ) {}

  public ngOnInit(): void {
    this.store.select(CollectionState.tracks).subscribe((value) => {
      if (value) {
        this.dataSource = new EntityDataSource(this.entityService, value, 'track', this.pageSize);
      }
    });
  }

  public onRowDoubleClick(event): void {
    this.store.dispatch(new PlayTrack(event.context, event.id));
  }
}
