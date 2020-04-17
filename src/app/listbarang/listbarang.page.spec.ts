import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbarangPage } from './listbarang.page';

describe('ListbarangPage', () => {
  let component: ListbarangPage;
  let fixture: ComponentFixture<ListbarangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListbarangPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListbarangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
