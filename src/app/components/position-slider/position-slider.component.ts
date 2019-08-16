import { Component, OnInit } from '@angular/core';
import {PlayerStateModel} from '../../store/models/player-state.model';
import {Store} from '@ngxs/store';

@Component({
  selector: 'app-position-slider',
  templateUrl: './position-slider.component.html',
  styleUrls: ['./position-slider.component.scss']
})
export class PositionSliderComponent implements OnInit {
  public player: PlayerStateModel;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.select(state => state.player).subscribe((value) => {
      this.player = value;
    });
  }
}
