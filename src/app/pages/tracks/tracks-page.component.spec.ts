import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TracksPageComponent } from './tracks.component';

describe('TracksPageComponent', () => {
  let component: TracksPageComponent;
  let fixture: ComponentFixture<TracksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TracksPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TracksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
