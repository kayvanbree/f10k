export interface SpotifyEntityModel {
  id: string;
  name: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  uri: string;
  type: string;
}
