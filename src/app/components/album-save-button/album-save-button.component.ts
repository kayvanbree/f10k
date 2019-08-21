import {Component, Input, OnChanges} from '@angular/core';
import {Store} from '@ngxs/store';
import {AlbumState} from '../../store/states/album.state';
import {RemoveAlbum, SaveAlbum} from '../../store/actions/album.actions';

@Component({
  selector: 'app-album-save-button',
  templateUrl: './album-save-button.component.html',
  styleUrls: ['./album-save-button.component.scss']
})
export class AlbumSaveButtonComponent implements OnChanges {
  @Input() id: string;
  public isSaved: boolean;

  constructor(private store: Store) { }

  ngOnChanges() {
    this.store.select(AlbumState.isSaved(this.id)).subscribe((value) => {
      this.isSaved = value;
    });
  }

  save(event) {
    event.stopPropagation();
    this.store.dispatch(new SaveAlbum(this.id));
  }

  remove(event) {
    event.stopPropagation();
    this.store.dispatch(new RemoveAlbum(this.id));
  }
}
