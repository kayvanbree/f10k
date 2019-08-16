import { TestBed, async, inject } from '@angular/core/testing';

import { SpotifyResolver } from './spotify.guard';

describe('SpotifyGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpotifyResolver]
    });
  });

  it('should ...', inject([SpotifyResolver], (guard: SpotifyResolver) => {
    expect(guard).toBeTruthy();
  }));
});
