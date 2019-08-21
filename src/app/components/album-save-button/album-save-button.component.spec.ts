import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumSaveButtonComponent } from './album-save-button.component';

describe('AlbumSaveButtonComponent', () => {
  let component: AlbumSaveButtonComponent;
  let fixture: ComponentFixture<AlbumSaveButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumSaveButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumSaveButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
