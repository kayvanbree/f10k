import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {TrackModel} from '../../store/models/track.model';
import {Store} from '@ngxs/store';
import {PageEvent} from '@angular/material';
import {PlayTrack} from '../../store/actions/player.actions';
import {GetTracks} from '../../store/actions/track.actions';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit, OnChanges {
  @Input() ids: string[];
  @Input() pageSize: number;
  @Input() displayedColumns: string[] = [
    'image',
    'artist',
    'name',
    'album',
    'popularity',
    'duration',
    'saved'
  ];
  @Input() total: number;
  @Input() loading = false;

  @Output() pageChange = new EventEmitter<number>();

  currentPage = 0;
  currentSongId: string;

  tracks: TrackModel[];

  constructor(
    private store: Store,
  ) {}

  public ngOnInit(): void {
    this.updateItems();
    this.store.select(state => state.tracks.tracks).subscribe((value) => {
      this.tracks = value;
      this.loading = false;
    });
    this.store.select(state => state.player.current_track.id).subscribe((value) => {
      this.currentSongId = value;
    });
  }

  public ngOnChanges(): void {
    this.updateItems();
  }

  public playTrack(id): void {
    this.store.dispatch(new PlayTrack(this.ids, id));
  }

  public openPage(event: PageEvent): void {
    this.pageChange.emit(event.pageIndex);
  }

  private updateItems(): void {
    const start = this.pageSize * this.currentPage;
    const end = start + this.pageSize;
    const pageItems = this.ids.slice(start, end);
    if (pageItems.length > 0) {
      this.store.dispatch(new GetTracks(pageItems, this.pageSize));
    }
  }
}
