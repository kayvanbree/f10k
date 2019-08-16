import { TestBed } from '@angular/core/testing';

import { PlaylistSpotifyService } from './playlist-spotify.service';

describe('PlaylistSpotifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaylistSpotifyService = TestBed.get(PlaylistSpotifyService);
    expect(service).toBeTruthy();
  });
});
