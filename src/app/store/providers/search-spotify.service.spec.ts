import { TestBed } from '@angular/core/testing';

import { SearchSpotifyService } from './search-spotify.service';

describe('SearchSpotifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchSpotifyService = TestBed.get(SearchSpotifyService);
    expect(service).toBeTruthy();
  });
});
