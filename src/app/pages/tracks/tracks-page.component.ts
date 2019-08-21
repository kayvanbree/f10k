import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {TrackModel} from '../../store/models/track.model';
import {PlayTrack} from '../../store/actions/player.actions';
import {TrackState} from '../../store/states/track.state';
import {TrackDataSource} from '../../datasources/track-data-source';
import {TrackSpotifyService} from '../../store/providers/track-spotify.service';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TracksPageComponent implements OnInit {
  public ids: string[];
  public pageSize = 50;
  public selector = TrackState.tracks;
  public dataSource: TrackDataSource;

  constructor(
    private store: Store,
    private trackService: TrackSpotifyService,
    private changeDetector: ChangeDetectorRef,
  ) {}

  public ngOnInit(): void {
    this.store.select(state => state.tracks.ids).subscribe((value) => {
      this.ids = value ? value : [];
      console.log(this.ids);
      this.dataSource = new TrackDataSource(this.trackService, this.ids, this.pageSize);
      this.changeDetector.detectChanges();
    });
  }

  public onRowDoubleClick(event: TrackModel): void {
    this.store.dispatch(new PlayTrack(this.ids, event.id));
  }
}
