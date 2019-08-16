export interface ArtistModel {
  name: string;
  id: string;
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  genres: string[];
  href: string;
  images: any[];
  popularity: number;
  type: string;
  uri: string;
}
