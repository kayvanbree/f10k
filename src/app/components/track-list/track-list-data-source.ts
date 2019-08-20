import {DataSource} from '@angular/cdk/table';
import {TrackModel} from '../../store/models/track.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {CollectionViewer} from '@angular/cdk/collections';

export class TrackListDataSource extends DataSource<TrackModel | undefined> {
  private cachedData: TrackModel[];
  private fetchedPages: Set<number>;
  private dataStream: BehaviorSubject<(TrackModel | undefined)[]>;

  constructor(
    public length: number,
    public pageSize: number,
  ) {
    super();
    this.cachedData = Array.from<TrackModel>({ length });
    this.fetchedPages = new Set<number>();
    this.dataStream = new BehaviorSubject<(TrackModel | undefined)[]>(this.cachedData);
  }

  connect(collectionViewer: CollectionViewer): Observable<(TrackModel | undefined)[] | ReadonlyArray<TrackModel | undefined>> {
    return undefined;
  }

  disconnect(collectionViewer: CollectionViewer): void {
  }
}
