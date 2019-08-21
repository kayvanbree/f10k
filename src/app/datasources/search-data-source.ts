import {PagedDataSource} from './paged-data-source';
import {TrackModel} from '../store/models/track.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {CollectionViewer} from '@angular/cdk/collections';
import {SearchSpotifyService} from '../store/providers/search-spotify.service';

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

  connect(collectionViewer: CollectionViewer): Observable<TrackModel[] | ReadonlyArray<TrackModel>> {
    return this.observable;
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.subject.complete();
  }

  openPage(page): void {
    this.searchService.search(this.query, this.pageSize, page, [this.type]).subscribe((value: any) => {
      this.entities = value[this.type + 's'].items;
      this.total = value[this.type + 's'].total;
      this.subject.next(this.entities);
    });
  }
}
