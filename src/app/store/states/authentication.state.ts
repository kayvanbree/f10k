import {Action, Selector, State, StateContext} from '@ngxs/store';
import {SpotifyAuthenticationService} from '../providers/spotify-authentication.service';
import {Login, Logout, RefreshLogin, UpdateAuthenticationTokens} from '../actions/authentication.actions';
import {AuthenticationStateModel} from '../models/authentication-state.model';

@State<AuthenticationStateModel>({
  name: 'authentication',
  defaults: {
    ngxs_spotify_access_token: null,
    ngxs_spotify_refresh_token: null,
    ngxs_spotify_token_expires: null,
  }
})
export class AuthenticationState {
  @Selector()
  static isLoggedIn(state: AuthenticationStateModel): boolean {
    return !!state.ngxs_spotify_access_token;
  }

  @Selector()
  static token(state: AuthenticationStateModel): string {
    return state.ngxs_spotify_access_token;
  }

  constructor(private authenticationService: SpotifyAuthenticationService) {}

  @Action(UpdateAuthenticationTokens)
  public updateAuthenticationTokens(ctx: StateContext<AuthenticationStateModel>, action: UpdateAuthenticationTokens) {
    ctx.setState({
      ngxs_spotify_access_token: action.ngxsSpotifyToken,
      ngxs_spotify_refresh_token: action.ngxsSpotifyTokenType,
      ngxs_spotify_token_expires: action.ngxsSpotifyTokenExpires,
    });
  }

  @Action(Login)
  public login(ctx: StateContext<AuthenticationStateModel>, action: Login) {
    this.authenticationService.login();
  }

  @Action(RefreshLogin)
  public refreshLogin(ctx: StateContext<AuthenticationStateModel>, action: RefreshLogin) {
    const state = ctx.getState();
    this.authenticationService.refreshLogin(state.ngxs_spotify_refresh_token).subscribe((value: any) => {
      console.log(value);
      ctx.dispatch(new UpdateAuthenticationTokens(
        value.access_token,
        value.refresh_token,
        value.expires_in
      ));
    });
  }

  @Action(Logout)
  public logout(ctx: StateContext<AuthenticationStateModel>, action: Logout) {
    ctx.setState({
      ngxs_spotify_access_token: null,
      ngxs_spotify_refresh_token: null,
      ngxs_spotify_token_expires: null,
    });
  }
}
