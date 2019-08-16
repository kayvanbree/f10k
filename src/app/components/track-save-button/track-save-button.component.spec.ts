import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackSaveButtonComponent } from './track-save-button.component';

describe('TrackSaveButtonComponent', () => {
  let component: TrackSaveButtonComponent;
  let fixture: ComponentFixture<TrackSaveButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackSaveButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackSaveButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
