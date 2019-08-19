import { Component, OnInit } from '@angular/core';
import {Store} from '@ngxs/store';
import {SetVolume} from '../../store/actions/player.actions';

@Component({
  selector: 'app-volume-control',
  templateUrl: './volume-control.component.html',
  styleUrls: ['./volume-control.component.scss']
})
export class VolumeControlComponent implements OnInit {
  private volume: number;

  constructor(private store: Store) { }

  public ngOnInit(): void {
    this.store.select(state => state.player.device.volume_percent).subscribe((value) => {
      this.volume = value;
    });
  }

  onNgModelChange(volume: number) {
    this.store.dispatch(new SetVolume(volume));
  }
}
