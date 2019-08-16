import {Component, Input, OnChanges} from '@angular/core';
import {Store} from '@ngxs/store';
import {TrackState} from '../../store/states/track.state';
import {RemoveTrack, SaveTrack} from '../../store/actions/track.actions';

@Component({
  selector: 'app-track-save-button',
  templateUrl: './track-save-button.component.html',
  styleUrls: ['./track-save-button.component.scss']
})
export class TrackSaveButtonComponent implements OnChanges {
  @Input() id: string;
  public isSaved: boolean;

  constructor(private store: Store) { }

  ngOnChanges() {
    this.store.select(TrackState.isSaved(this.id)).subscribe((value) => {
      this.isSaved = value;
    });
  }

  save(event) {
    event.stopPropagation();
    this.store.dispatch(new SaveTrack(this.id));
  }

  remove(event) {
    event.stopPropagation();
    this.store.dispatch(new RemoveTrack(this.id));
  }
}
