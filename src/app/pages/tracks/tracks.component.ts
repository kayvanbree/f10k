import { Component, OnInit } from '@angular/core';
import {Store} from '@ngxs/store';
import {GetTracks} from '../../store/actions/track.actions';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {
  public ids: string[];
  public pageSize = 50;

  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.store.select(state => state.tracks.ids).subscribe((value) => {
      this.ids = value;
    });
  }

  public onPageChange(offset: number) {
    const start = offset * this.pageSize;
    const end = start + this.pageSize;
    const pageIds = this.ids.slice(start, end);
    this.store.dispatch(new GetTracks(pageIds, this.pageSize));
  }
}
