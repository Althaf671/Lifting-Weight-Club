import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Entry } from './entry';

describe('Entry', () => {
  let component: Entry;
  let fixture: ComponentFixture<Entry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Entry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Entry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
