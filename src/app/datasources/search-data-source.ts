import {PagedDataSource} from './paged-data-source';
import {TrackModel} from '../store/entities/track.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {CollectionViewer} from '@angular/cdk/collections';
import {SearchSpotifyService} from '../store/providers/search-spotify.service';
import {RowDoubleClickEvent} from '../events/row-double-click-event';

export class SearchDataSource extends PagedDataSource<TrackModel> {
  public entities = [];

  private subject = new BehaviorSubject<TrackModel[]>(this.entities);
  private observable = this.subject.asObservable();

  constructor(
    private searchService: SearchSpotifyService,
    public query: string,
    public pageSize: number,
    public type: string,
  ) {
    super();
    this.total = 0;
  }

  public connect(collectionViewer: CollectionViewer): Observable<TrackModel[] | ReadonlyArray<TrackModel>> {
    return this.observable;
  }

  public disconnect(collectionViewer: CollectionViewer): void {
    this.subject.complete();
  }

  public openPage(page): void {
    this.searchService.search(this.query, this.pageSize, page, [this.type]).subscribe((value: any) => {
      this.entities = value[this.type + 's'].items;
      this.total = value[this.type + 's'].total;
      this.subject.next(this.entities);
    });
  }

  public getRowDoubleClickEvent(row: any): RowDoubleClickEvent {
    return {
      context: this.entities.map(x => x.id),
      id: row.id,
    };
  }
}
