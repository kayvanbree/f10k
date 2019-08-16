import { TestBed } from '@angular/core/testing';

import { PlayerSpotifyService } from './player-spotify.service';

describe('PlayerSpotifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerSpotifyService = TestBed.get(PlayerSpotifyService);
    expect(service).toBeTruthy();
  });
});
