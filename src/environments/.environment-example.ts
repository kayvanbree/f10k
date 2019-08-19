export const environment = {
  production: false,
  apiBase: 'https://api.spotify.com/v1',
  authorizationUrl: 'https://accounts.spotify.com/authorize',
  clientId: '<your-client-id>',
  redirectUri: 'http://localhost:4200/spotify-redirect'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
