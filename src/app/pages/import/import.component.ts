import { Component } from '@angular/core';
import {ImportTracks, ImportPlaylists} from '../../store/actions/track.actions';
import {Store} from '@ngxs/store';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class ImportComponent {
  constructor(private store: Store) { }

  startImport() {
    this.store.dispatch(new ImportTracks(0));
  }
  startImportFromPlaylists() {
    this.store.dispatch(new ImportPlaylists(0));
  }
}
