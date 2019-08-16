import { TestBed } from '@angular/core/testing';

import { SpotifyAuthenticationService } from './spotify-authentication.service';

describe('SpotifyAuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpotifyAuthenticationService = TestBed.get(SpotifyAuthenticationService);
    expect(service).toBeTruthy();
  });
});
