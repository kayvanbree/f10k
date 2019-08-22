import { TestBed } from '@angular/core/testing';

import { SpotifyEntityService } from './spotify-entity.service';

describe('SpotifyEntityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpotifyEntityService = TestBed.get(SpotifyEntityService);
    expect(service).toBeTruthy();
  });
});
