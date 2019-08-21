import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SpotifyEntityModel} from '../../store/models/spotify-entity.model';
import {Store} from '@ngxs/store';

export interface LoadRequestEvent {
  page: number;
  pageSize: number;
}

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.scss']
})
export class EntityListComponent implements OnInit {
  /**
   * How many entities should show per list.
   */
  @Input() public pageSize: number;

  /**
   * The displayed colums.
   * Columns that can be used:
   * - image
   * - album-image
   * - name
   * - popularity
   * - album
   * - artist
   * - duration
   * - saved
   */
  @Input() public columns: string[] = ['name'];

  /**
   * The selector to get your data from the NGXS store.
   */
  @Input() public selector: any;

  /**
   * The current page
   */
  @Input() public page: number;

  /**
   * The total of entities (not pages)
   */
  @Input() public total: number;

  /**
   * Emits an event with page and pageSize to be loaded.
   */
  @Output() public loadRequest = new EventEmitter<LoadRequestEvent>();

  /**
   * Emits an event containing the row object.
   */
  @Output() public rowDoubleClick = new EventEmitter<SpotifyEntityModel>();

  public entities: SpotifyEntityModel[];
  public loading = true;

  constructor(
    private store: Store,
  ) {}

  /**
   * Get the entities from the store.
   */
  public ngOnInit(): void {
    this.requestLoad();
    this.store.select(this.selector).subscribe((value: SpotifyEntityModel[]) => {
      this.entities = value;
      this.loading = false;
    });
  }

  /**
   * Change page and request load
   */
  public onPageChange(event): void {
    this.page = event.pageIndex;
    this.requestLoad();
  }

  /**
   * Emit the event to request entity loading.
   */
  private requestLoad(): void {
    if (this.total > 0) {
      this.loadRequest.emit({
        page: this.page,
        pageSize: this.pageSize,
      });
    }
  }
}
