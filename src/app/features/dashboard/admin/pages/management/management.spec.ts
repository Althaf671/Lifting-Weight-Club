import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Management } from './management';

describe('Management', () => {
  let component: Management;
  let fixture: ComponentFixture<Management>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Management]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Management);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
