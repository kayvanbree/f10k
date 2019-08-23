import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {SpotifyEntityModel} from '../../store/entities/spotify-entity.model';
import {DataSource} from '@angular/cdk/table';
import {PagedDataSource} from '../../datasources/paged-data-source';

@Component({
  selector: 'app-virtual-scroll-list',
  templateUrl: './virtual-scroll-list.component.html',
  styleUrls: ['./virtual-scroll-list.component.scss']
})
export class VirtualScrollListComponent implements OnInit, OnChanges {
  /**
   * The dataSource this list subscribes to
   */
  @Input() dataSource: PagedDataSource<SpotifyEntityModel>;

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
   * Emits an event containing the row object and the ids of the rest of the page
   */
  @Output() public rowDoubleClick = new EventEmitter<{
    id: string,
    context: string[]
  }>();

  public ngOnInit(): void {
    this.dataSource.openPage(0);
  }

  public ngOnChanges(): void {
    this.dataSource.openPage(0);
  }

  public onPageChange(event): void {
    this.dataSource.openPage(event.pageIndex);
  }

  public onRowClick(event: any) {
    this.rowDoubleClick.emit(this.dataSource.getRowDoubleClickEvent(event));
  }

  public trackBy(index, item) {
    return item.id;
  }
}
