export interface SpotifyConfig {
  clientId: string;
  redirectUri: string;
  scope: string;
  authToken?: string;
  apiBase: string;
  authorizationUrl: string;
  f10kApiBase: string;
}
