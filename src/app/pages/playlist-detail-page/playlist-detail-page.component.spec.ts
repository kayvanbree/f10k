import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistDetailPageComponent } from './playlist-detail-page.component';

describe('PlaylistDetailPageComponent', () => {
  let component: PlaylistDetailPageComponent;
  let fixture: ComponentFixture<PlaylistDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
