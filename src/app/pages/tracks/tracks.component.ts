import { Component, OnInit } from '@angular/core';
import {Store} from '@ngxs/store';
import {GetTracks} from '../../store/actions/track.actions';
import {LoadRequestEvent} from '../../components/entity-list/entity-list.component';
import {TrackModel} from '../../store/models/track.model';
import {PlayTrack} from '../../store/actions/player.actions';
import {TrackState} from '../../store/states/track.state';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {
  public ids: string[];
  public pageSize = 50;
  public selector = TrackState.tracks;

  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.store.select(state => state.tracks.ids).subscribe((value) => {
      this.ids = value;
    });
  }

  public onLoadRequest(event: LoadRequestEvent): void {
    this.store.dispatch(new GetTracks(this.ids, event.page, event.pageSize));
  }

  public onRowDoubleClick(event: TrackModel): void {
    this.store.dispatch(new PlayTrack(this.ids, event.id));
  }
}
