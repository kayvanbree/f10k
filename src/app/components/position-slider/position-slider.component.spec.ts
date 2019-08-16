import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionSliderComponent } from './position-slider.component';

describe('PositionSliderComponent', () => {
  let component: PositionSliderComponent;
  let fixture: ComponentFixture<PositionSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
