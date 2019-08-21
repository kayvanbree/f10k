import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistNamesComponent } from './artist-names.component';

describe('ArtistNamesComponent', () => {
  let component: ArtistNamesComponent;
  let fixture: ComponentFixture<ArtistNamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistNamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
