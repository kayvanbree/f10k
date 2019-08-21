import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsPageComponent } from './artists.component';

describe('ArtistsPageComponent', () => {
  let component: ArtistsPageComponent;
  let fixture: ComponentFixture<ArtistsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
