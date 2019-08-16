import { TestBed } from '@angular/core/testing';

import { AlbumSpotifyService } from './album-spotify.service';

describe('AlbumSpotifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlbumSpotifyService = TestBed.get(AlbumSpotifyService);
    expect(service).toBeTruthy();
  });
});
