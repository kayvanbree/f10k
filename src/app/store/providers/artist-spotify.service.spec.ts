import { TestBed } from '@angular/core/testing';

import { ArtistSpotifyService } from './artist-spotify.service';

describe('ArtistSpotifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtistSpotifyService = TestBed.get(ArtistSpotifyService);
    expect(service).toBeTruthy();
  });
});
