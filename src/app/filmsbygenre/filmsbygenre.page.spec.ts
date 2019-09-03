import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsbygenrePage } from './filmsbygenre.page';

describe('FilmsbygenrePage', () => {
  let component: FilmsbygenrePage;
  let fixture: ComponentFixture<FilmsbygenrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsbygenrePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsbygenrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
