import { Component, OnInit } from '@angular/core';
import {Store} from '@ngxs/store';
import {ActivatedRoute, Router} from '@angular/router';
import {ArtistModel} from '../../store/entities/artist.model';
import {SpotifyEntityService} from '../../store/providers/spotify-entity.service';
import {NestedEntityDataSource} from '../../datasources/nested-entity-data-source';

@Component({
  selector: 'app-artist-detail-page',
  templateUrl: './artist-detail-page.component.html',
  styleUrls: ['./artist-detail-page.component.scss']
})
export class ArtistDetailPageComponent implements OnInit {
  public artist: ArtistModel;

  public albumDataSource: NestedEntityDataSource;
  public pageSize = 20;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router,
    private entityService: SpotifyEntityService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.loadEntities(params.id);
    });
  }

  public onRowDoubleClick(event) {
    this.router.navigate(['album', event.id]);
  }

  private loadEntities(id) {
    this.entityService.getEntity(id, 'artist').subscribe((artist: ArtistModel) => {
      this.artist = artist;
      this.albumDataSource = new NestedEntityDataSource(this.entityService, id, 'artist', 'album', this.pageSize);
    });
  }
}
