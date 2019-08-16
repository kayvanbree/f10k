import {Selector, State} from '@ngxs/store';
import {FolderStateModel} from '../models/folder-state.model';

@State<FolderStateModel>({
  name: 'folders',
  defaults: {
    folderList: [
      '1',
      '2',
    ],
    folders: [
      { name: 'Henk', id: '1' },
      { name: 'Piet', id: '2' },
      { name: 'Klaas', id: '3' },
      { name: 'Gerard', id: '4' },
    ],
  },
})
export class FolderState {
  @Selector()
  static folders(state: FolderStateModel) {
    return state.folders;
  }
}
