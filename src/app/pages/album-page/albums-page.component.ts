import { Component, OnInit } from '@angular/core';
import {Store} from '@ngxs/store';
import {Router} from '@angular/router';
import {AlbumState} from '../../store/states/album.state';
import {LoadRequestEvent} from '../../components/entity-list/entity-list.component';
import {GetAlbums} from '../../store/actions/album.actions';
import {AlbumModel} from '../../store/models/album.model';

@Component({
  selector: 'app-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.scss']
})
export class AlbumsPageComponent implements OnInit {
  public ids: string[];
  public pageSize = 50;
  public selector = AlbumState.albums;

  constructor(
    private store: Store,
    private router: Router,
  ) {}

  public ngOnInit(): void {
    this.store.select(state => state.albums.ids).subscribe((value) => {
      this.ids = value;
    });
  }

  public onLoadRequest(event: LoadRequestEvent): void {
    this.store.dispatch(new GetAlbums(this.ids, event.page, event.pageSize));
  }

  public onRowDoubleClick(event: AlbumModel): void {
    this.router.navigate(['album', event.id]);
  }
}
