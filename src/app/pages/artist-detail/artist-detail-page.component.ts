import { Component, OnInit } from '@angular/core';
import {Store} from '@ngxs/store';
import {ActivatedRoute} from '@angular/router';
import {GetArtist} from '../../store/actions/artist.actions';
import {ArtistModel} from '../../store/models/artist.model';

@Component({
  selector: 'app-artist-detail-page',
  templateUrl: './artist-detail-page.component.html',
  styleUrls: ['./artist-detail-page.component.scss']
})
export class ArtistDetailPageComponent implements OnInit {
  public artist: ArtistModel;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((value) => {
      this.store.dispatch(new GetArtist(value.id));
    });

    this.store.select(state => state.artists.currentArtist).subscribe((value) => {
      this.artist = value;
    });
  }
}
