import { Component, OnInit } from '@angular/core';
import {Store} from '@ngxs/store';
import {Router} from '@angular/router';
import {SpotifyEntityService} from '../../store/providers/spotify-entity.service';
import {AlbumModel} from '../../store/entities/album.model';
import {ProfileEntityDataSource} from '../../datasources/profile-entity-data-source';

@Component({
  selector: 'app-playlist-page',
  templateUrl: './playlist-page.component.html',
  styleUrls: ['./playlist-page.component.scss']
})
export class PlaylistPageComponent implements OnInit {
  public dataSource: ProfileEntityDataSource;
  public pageSize = 50;

  constructor(
    private store: Store,
    private router: Router,
    private entityService: SpotifyEntityService,
  ) {}

  public ngOnInit(): void {
    this.dataSource = new ProfileEntityDataSource(this.entityService, 'playlist', this.pageSize);
  }

  public onRowDoubleClick(event: AlbumModel): void {
    this.router.navigate(['playlist', event.id]);
  }
}
