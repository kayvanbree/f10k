import { Component, OnInit } from '@angular/core';
import {Store} from '@ngxs/store';
import {Router} from '@angular/router';
import {AlbumModel} from '../../store/entities/album.model';
import {EntityDataSource} from '../../datasources/entity-data-source';
import {SpotifyEntityService} from '../../store/providers/spotify-entity.service';

@Component({
  selector: 'app-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.scss']
})
export class AlbumsPageComponent implements OnInit {
  public dataSource: EntityDataSource;
  public pageSize = 50;

  constructor(
    private store: Store,
    private router: Router,
    private entityService: SpotifyEntityService,
  ) {}

  public ngOnInit(): void {
    this.store.select(state => state.albums.ids).subscribe((value) => {
      this.dataSource = new EntityDataSource(this.entityService, value, 'album', this.pageSize);
    });
  }

  public onRowDoubleClick(event: AlbumModel): void {
    this.router.navigate(['album', event.id]);
  }
}
