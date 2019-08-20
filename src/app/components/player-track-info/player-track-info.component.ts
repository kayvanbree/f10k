import { Component, OnInit } from '@angular/core';
import {PlayerStateModel} from '../../store/models/player-state.model';
import {Store} from '@ngxs/store';

@Component({
  selector: 'app-player-track-info',
  templateUrl: './player-track-info.component.html',
  styleUrls: ['./player-track-info.component.scss']
})
export class PlayerTrackInfoComponent implements OnInit {
  public player: PlayerStateModel;

  constructor(private store: Store) { }

  public ngOnInit(): void {
    this.store.select(state => state.player).subscribe((value) => {
      this.player = value;
    });
  }
}
