import {DataSource} from '@angular/cdk/table';

export abstract class PagedDataSource<T> extends DataSource<T> {
  public total: number;
  public pageSize: number;
  abstract openPage(page): void;
  abstract getIds(): string[];
}
