import { TestBed } from '@angular/core/testing';

import { ProfileSpotifyService } from './profile-spotify.service';

describe('ProfileSpotifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileSpotifyService = TestBed.get(ProfileSpotifyService);
    expect(service).toBeTruthy();
  });
});
