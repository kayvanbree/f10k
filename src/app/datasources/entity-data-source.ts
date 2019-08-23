import {TrackModel} from '../store/entities/track.model';
import {CollectionViewer} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';
import {PagedDataSource} from './paged-data-source';
import {SpotifyEntityModel} from '../store/entities/spotify-entity.model';
import {SpotifyEntityService} from '../store/providers/spotify-entity.service';
import {RowDoubleClickEvent} from '../events/row-double-click-event';

export class EntityDataSource extends PagedDataSource<SpotifyEntityModel> {
  private entities = [];

  private subject = new BehaviorSubject<SpotifyEntityModel[]>(this.entities);
  private observable = this.subject.asObservable();

  constructor(
    private entityService: SpotifyEntityService,
    private ids: string[],
    public type: string,
    public pageSize: number,
  ) {
    super();
    this.total = ids.length > 0 ? ids.length : 0;
  }

  connect(collectionViewer: CollectionViewer): Observable<TrackModel[] | ReadonlyArray<SpotifyEntityModel>> {
    return this.observable;
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.subject.complete();
  }

  public openPage(page): void {
    const start = page * this.pageSize;
    const end = start + this.pageSize;
    const pageIds = this.ids.slice(start, end);
    if (pageIds.length > 0) {
      this.entityService.getEntities(pageIds, this.type, this.pageSize).subscribe((value: any) => {
        this.entities = value[this.type + 's'];
        this.subject.next(this.entities);
      });
    }
  }

  public getRowDoubleClickEvent(row: any): RowDoubleClickEvent {
    return {
      context: this.ids,
      id: row.id,
    };
  }
}
