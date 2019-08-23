import {Component} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {AuthenticationState} from './store/states/authentication.state';
import {Logout} from './store/actions/authentication.actions';
import {Observable} from 'rxjs';
import {PlayerState} from './store/states/player.state';
import {PlayerStateModel} from './store/models/player-state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'f10k';

  @Select(PlayerState) player: Observable<PlayerStateModel>;
  @Select(AuthenticationState.isLoggedIn) public loggedIn: Observable<boolean>;

  constructor(private store: Store) {}

  logout() {
    this.store.dispatch(new Logout());
  }
}
