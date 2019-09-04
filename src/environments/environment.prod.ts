import 'angular-server-side-configuration/process';

/**
 * How to use angular-server-side-configuration:
 *
 * Use process.env.NAME_OF_YOUR_ENVIRONMENT_VARIABLE
 *
 * export const environment = {
 *   stringValue: process.env.STRING_VALUE,
 *   stringValueWithDefault: process.env.STRING_VALUE || 'defaultValue',
 *   numberValue: Number(process.env.NUMBER_VALUE),
 *   numberValueWithDefault: Number(process.env.NUMBER_VALUE || 10),
 *   booleanValue: Boolean(process.env.BOOLEAN_VALUE),
 *   booleanValueInverted: process.env.BOOLEAN_VALUE_INVERTED !== 'false',
 * };
 */

export const environment = {
  production: false,
  authorizationUrl: process.env.SPOTIFY_AUTHORIZATION_URL || 'https://accounts.spotify.com/authorize',
  clientId: process.env.SPOTIFY_CLIENT_ID || '3a6db42ee8c14d4797f65342c9a8b67d',
  redirectUri: process.env.F10K_REDIRECT_URI || 'http://136.144.154.241/spotify-redirect',
  f10kApiBase: process.env.F10K_API_BASE || 'http://136.144.154.241/api/v1'
};
