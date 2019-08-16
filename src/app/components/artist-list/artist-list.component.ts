import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {PageEvent} from '@angular/material';
import {Store} from '@ngxs/store';
import {ArtistModel} from '../../store/models/artist.model';
import {GetArtists} from '../../store/actions/artist.actions';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit, OnChanges {
  @Input() ids: string[];
  @Input() pageSize: number;
  @Input() displayedColumns: string[] = ['image', 'name', 'popularity', 'saved'];
  @Input() total: number;
  @Input() loading = false;

  @Output() pageChange = new EventEmitter<number>();

  currentPage = 0;

  public artists: ArtistModel[];

  constructor(
    private router: Router,
    private store: Store,
  ) {}

  public ngOnInit(): void {
    this.updateItems();
    this.store.select(state => state.artists.artists).subscribe((value) => {
      this.artists = value;
      this.loading = false;
    });
  }

  public ngOnChanges(): void {
    this.updateItems();
  }

  public openArtist(id) {
    this.router.navigate(['/artist', id]);
  }

  public openPage(event: PageEvent): void {
    this.pageChange.emit(event.pageIndex);
  }

  private updateItems(): void {
    const start = this.pageSize * this.currentPage;
    const end = start + this.pageSize;
    const pageItems = this.ids.slice(start, end);
    this.store.dispatch(new GetArtists(pageItems, this.pageSize));
  }
}
