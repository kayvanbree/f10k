import { Component } from '@angular/core';
import {Store} from '@ngxs/store';
import {Login} from '../../store/actions/authentication.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor(private store: Store) { }

  public login(): void {
    this.store.dispatch(new Login());
  }
}
