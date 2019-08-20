import {Action, Selector, State, StateContext} from '@ngxs/store';
import {SpotifyAuthenticationService} from '../providers/spotify-authentication.service';
import {Login, Logout, UpdateAuthenticationTokens} from '../actions/authentication.actions';
import {AuthenticationStateModel} from '../models/authentication-state.model';
import {Observable} from 'rxjs';

@State<AuthenticationStateModel>({
  name: 'authentication',
  defaults: {
    ngxs_spotify_token: null,
    ngxs_spotify_token_type: null,
    ngxs_spotify_token_expires: null,
    ngxs_spotify_token_expires_at: null,
  }
})
export class AuthenticationState {
  @Selector()
  static isLoggedIn(state: AuthenticationStateModel): boolean {
    const now = Date.now();
    const expiresAt = state.ngxs_spotify_token_expires_at;
    return state.ngxs_spotify_token && now < expiresAt;
  }

  @Selector()
  static token(state: AuthenticationStateModel): string {
    return state.ngxs_spotify_token;
  }

  constructor(private authenticationService: SpotifyAuthenticationService) {}

  @Action(UpdateAuthenticationTokens)
  public updateAuthenticationTokens(ctx: StateContext<AuthenticationStateModel>, action: UpdateAuthenticationTokens) {
    const expiresAt = Date.now() + action.ngxsSpotifyTokenExpires;
    ctx.setState({
      ngxs_spotify_token: action.ngxsSpotifyToken,
      ngxs_spotify_token_type: action.ngxsSpotifyTokenType,
      ngxs_spotify_token_expires: action.ngxsSpotifyTokenExpires,
      ngxs_spotify_token_expires_at: expiresAt,
    });
  }

  @Action(Login)
  public login(ctx: StateContext<AuthenticationStateModel>, action: Login) {
    this.authenticationService.login();
  }

  @Action(Logout)
  public logout(ctx: StateContext<AuthenticationStateModel>, action: Logout) {
    ctx.setState({
      ngxs_spotify_token: null,
      ngxs_spotify_token_type: null,
      ngxs_spotify_token_expires: null,
      ngxs_spotify_token_expires_at: null,
    });
  }
}
