import { Component } from '@angular/core';
import {Select} from '@ngxs/store';
import {FolderState} from '../../store/states/folder.state';
import {Observable} from 'rxjs';
import {FolderModel} from '../../store/models/folder.model';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent {
  @Select(FolderState.folders) folders: Observable<FolderModel[]>;
}
