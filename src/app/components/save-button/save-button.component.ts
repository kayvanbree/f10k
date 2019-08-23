import {Component, Input, OnChanges} from '@angular/core';
import {Store} from '@ngxs/store';
import {CollectionState} from '../../store/states/collection.state';
import {Remove, Save} from '../../store/actions/collection.actions';

@Component({
  selector: 'app-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.scss']
})
export class SaveButtonComponent implements OnChanges {
  @Input() type: string;
  @Input() id: string;
  public isSaved: boolean;

  constructor(private store: Store) { }

  ngOnChanges() {
    this.store.select(CollectionState.isSaved(this.type, this.id)).subscribe((value) => {
      this.isSaved = value;
    });
  }

  save(event) {
    event.stopPropagation();
    this.store.dispatch(new Save(this.type, this.id));
  }

  remove(event) {
    event.stopPropagation();
    this.store.dispatch(new Remove(this.type, this.id));
  }
}
