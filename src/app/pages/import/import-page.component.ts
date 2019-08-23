import { Component } from '@angular/core';
import {Store} from '@ngxs/store';
import {ImportPlaylists, ImportTracks} from '../../store/actions/collection.actions';

@Component({
  selector: 'app-import-page',
  templateUrl: './import-page.component.html',
  styleUrls: ['./import-page.component.scss']
})
export class ImportPageComponent {
  constructor(private store: Store) { }

  startImport() {
    this.store.dispatch(new ImportTracks(0));
  }
  startImportFromPlaylists() {
    this.store.dispatch(new ImportPlaylists(0));
  }
}
