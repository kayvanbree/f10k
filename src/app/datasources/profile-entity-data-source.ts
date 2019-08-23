import {BehaviorSubject, Observable} from 'rxjs';
import {SpotifyEntityModel} from '../store/entities/spotify-entity.model';
import {SpotifyEntityService} from '../store/providers/spotify-entity.service';
import {PagedDataSource} from './paged-data-source';
import {CollectionViewer} from '@angular/cdk/collections';
import {TrackModel} from '../store/entities/track.model';
import {RowDoubleClickEvent} from '../events/row-double-click-event';

export class ProfileEntityDataSource extends PagedDataSource<SpotifyEntityModel>  {
  private entities = [];

  private subject = new BehaviorSubject<SpotifyEntityModel[]>(this.entities);
  private observable = this.subject.asObservable();

  constructor(
    private entityService: SpotifyEntityService,
    public type: string,
    public pageSize: number,
  ) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<TrackModel[] | ReadonlyArray<SpotifyEntityModel>> {
    return this.observable;
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.subject.complete();
  }

  public openPage(page): void {
    this.entityService.getProfileEntities(this.type, page, this.pageSize).subscribe((value: any) => {
      this.entities = value.items;
      this.total = value.total;
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
