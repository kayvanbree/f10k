import {Component} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {AuthenticationState} from './store/states/authentication.state';
import {Logout} from './store/actions/authentication.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'f10k';

  @Select(AuthenticationState.isLoggedIn) public loggedIn: boolean;

  constructor(private store: Store) {}

  logout() {
    this.store.dispatch(new Logout());
  }
}
