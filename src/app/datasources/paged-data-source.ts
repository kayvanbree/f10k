import {DataSource} from '@angular/cdk/table';
import {RowDoubleClickEvent} from '../events/row-double-click-event';

export abstract class PagedDataSource<T> extends DataSource<T> {
  public total: number;
  public pageSize: number;
  abstract openPage(page): void;
  abstract getRowDoubleClickEvent(row: any): RowDoubleClickEvent;
}
