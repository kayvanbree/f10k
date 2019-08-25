export class UpdateAuthenticationTokens {
  static readonly type = '[Auth] UpdateAuthenticationTokens';
  constructor(
    public ngxsSpotifyToken: string,
    public ngxsSpotifyTokenType: string,
    public ngxsSpotifyTokenExpires: number,
  ) {}
}

export class Login {
  static readonly type = '[Auth] Login';
}

export class RefreshLogin {
  static readonly type = '[Auth] RefreshLogin';
}

export class Logout {
  static readonly type = '[Auth] Logout';
}
