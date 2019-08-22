import {BehaviorSubject, Observable} from 'rxjs';
import {SpotifyEntityModel} from '../store/models/spotify-entity.model';
import {SpotifyEntityService} from '../store/providers/spotify-entity.service';
import {PagedDataSource} from './paged-data-source';
import {CollectionViewer} from '@angular/cdk/collections';
import {TrackModel} from '../store/models/track.model';

export class NestedEntityDataSource extends PagedDataSource<SpotifyEntityModel>  {
  private entities = [];

  private subject = new BehaviorSubject<SpotifyEntityModel[]>(this.entities);
  private observable = this.subject.asObservable();

  constructor(
    private entityService: SpotifyEntityService,
    private id: string,
    private parentType: string,
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
    this.entityService.getNestedEntities(this.id, this.parentType, this.type, page, this.pageSize).subscribe((value: any) => {
      this.entities = value.items;
      this.total = value.total;
      this.subject.next(this.entities);
    });
  }
}
