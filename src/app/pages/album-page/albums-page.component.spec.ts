import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsPageComponent } from './album-page.component';

describe('AlbumsPageComponent', () => {
  let component: AlbumsPageComponent;
  let fixture: ComponentFixture<AlbumsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
