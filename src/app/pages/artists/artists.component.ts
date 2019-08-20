import {Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {GetArtists} from '../../store/actions/artist.actions';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
  public ids: string[];
  public pageSize = 50;

  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.store.select(state => state.artists.ids).subscribe((value) => {
      this.ids = value;
    });
  }

  public onPageChange(offset: number) {
    const start = offset * this.pageSize;
    const end = start + this.pageSize;
    const pageIds = this.ids.slice(start, end);
    this.store.dispatch(new GetArtists(pageIds, this.pageSize));
  }
}
