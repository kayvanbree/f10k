import { TestBed } from '@angular/core/testing';

import { TrackSpotifyService } from './track-spotify.service';

describe('TrackSpotifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrackSpotifyService = TestBed.get(TrackSpotifyService);
    expect(service).toBeTruthy();
  });
});
