import {Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {ArtistModel} from '../../store/models/artist.model';
import {Router} from '@angular/router';
import {SpotifyEntityService} from '../../store/providers/spotify-entity.service';
import {EntityDataSource} from '../../datasources/entity-data-source';

@Component({
  selector: 'app-artists-page',
  templateUrl: './artists-page.component.html',
  styleUrls: ['./artists-page.component.scss']
})
export class ArtistsPageComponent implements OnInit {
  public dataSource: EntityDataSource;
  public pageSize = 50;

  constructor(
    private store: Store,
    private router: Router,
    private entityService: SpotifyEntityService,
  ) {}

  public ngOnInit(): void {
    this.store.select(state => state.artists.ids).subscribe((value) => {
      this.dataSource = new EntityDataSource(this.entityService, value, 'artist', this.pageSize);
    });
  }

  public onRowDoubleClick(event: ArtistModel): void {
    this.router.navigate(['artist', event.id]);
  }
}
