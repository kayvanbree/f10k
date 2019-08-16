import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistSaveButtonComponent } from './artist-save-button.component';

describe('ArtistSaveButtonComponent', () => {
  let component: ArtistSaveButtonComponent;
  let fixture: ComponentFixture<ArtistSaveButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistSaveButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistSaveButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
