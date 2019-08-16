import { Component, OnInit } from '@angular/core';
import {Store} from '@ngxs/store';
import {ActivatedRoute} from '@angular/router';
import {GetArtist, SaveArtist} from '../../store/actions/artist.actions';
import {ArtistModel} from '../../store/models/artist.model';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent implements OnInit {
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
