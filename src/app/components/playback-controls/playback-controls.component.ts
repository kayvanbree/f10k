import { Component, OnInit } from '@angular/core';
import {PlayerStateModel} from '../../store/models/player-state.model';
import {Store} from '@ngxs/store';
import {NextTrack, PreviousTrack, TogglePlay} from '../../store/actions/player.actions';

@Component({
  selector: 'app-playback-controls',
  templateUrl: './playback-controls.component.html',
  styleUrls: ['./playback-controls.component.scss']
})
export class PlaybackControlsComponent implements OnInit {
  public player: PlayerStateModel;

  constructor(private store: Store) { }

  public ngOnInit(): void {
    this.store.select(state => state.player).subscribe((value) => {
      this.player = value;
    });
  }

  togglePlay() {
    this.store.dispatch(new TogglePlay());
  }

  next() {
    this.store.dispatch(new NextTrack());
  }

  previous() {
    this.store.dispatch(new PreviousTrack());
  }
}
