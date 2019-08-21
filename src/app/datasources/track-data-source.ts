import {TrackModel} from '../store/models/track.model';
import {CollectionViewer} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';
import {TrackSpotifyService} from '../store/providers/track-spotify.service';
import {PagedDataSource} from './paged-data-source';

export class TrackDataSource extends PagedDataSource<TrackModel> {
  private tracks = [];

  private subject = new BehaviorSubject<TrackModel[]>(this.tracks);
  private observable = this.subject.asObservable();

  constructor(
    private trackService: TrackSpotifyService,
    private ids: string[],
    public pageSize: number,
  ) {
    super();
    this.total = ids.length > 0 ? ids.length : 0;
  }

  connect(collectionViewer: CollectionViewer): Observable<TrackModel[] | ReadonlyArray<TrackModel>> {
    return this.observable;
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.subject.complete();
  }

  public openPage(page): void {
    const start = page * this.pageSize;
    const end = start + this.pageSize;
    const pageIds = this.ids.slice(start, end);
    this.trackService.getTracks(pageIds, this.pageSize).subscribe((value: any) => {
      this.tracks = value.tracks;
      this.subject.next(this.tracks);
    });
  }
}
