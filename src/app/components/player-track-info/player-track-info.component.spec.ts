import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTrackInfoComponent } from './player-track-info.component';

describe('PlayerTrackInfoComponent', () => {
  let component: PlayerTrackInfoComponent;
  let fixture: ComponentFixture<PlayerTrackInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerTrackInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerTrackInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
