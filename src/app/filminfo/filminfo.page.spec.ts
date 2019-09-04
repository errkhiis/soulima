import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilminfoPage } from './filminfo.page';

describe('FilminfoPage', () => {
  let component: FilminfoPage;
  let fixture: ComponentFixture<FilminfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilminfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilminfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
