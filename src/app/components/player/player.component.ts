import {Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {PlayerStateModel} from '../../store/models/player-state.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  public player: PlayerStateModel;

  constructor(private store: Store) { }

  public ngOnInit(): void {
    this.store.select(state => state.player).subscribe((value) => {
      this.player = value;
    });
  }
}
