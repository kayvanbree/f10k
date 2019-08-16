export interface SearchStateModel {
  query: string;
  results: {
    artists: any;
    albums: any;
    tracks: any;
    playlists: any;
  };
}
