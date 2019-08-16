import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {ArtistState} from '../../store/states/artist.state';
import {RemoveArtist, SaveArtist} from '../../store/actions/artist.actions';

@Component({
  selector: 'app-artist-save-button',
  templateUrl: './artist-save-button.component.html',
  styleUrls: ['./artist-save-button.component.scss']
})
export class ArtistSaveButtonComponent implements OnChanges {
  @Input() id: string;
  public isSaved: boolean;

  constructor(private store: Store) { }

  ngOnChanges() {
    this.store.select(ArtistState.isSaved(this.id)).subscribe((value) => {
      this.isSaved = value;
    });
  }

  save(event) {
    event.stopPropagation();
    this.store.dispatch(new SaveArtist(this.id));
  }

  remove(event) {
    event.stopPropagation();
    this.store.dispatch(new RemoveArtist(this.id));
  }
}
