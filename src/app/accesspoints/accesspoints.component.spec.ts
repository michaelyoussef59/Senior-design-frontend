import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesspointsComponent } from './accesspoints.component';

describe('AccesspointsComponent', () => {
  let component: AccesspointsComponent;
  let fixture: ComponentFixture<AccesspointsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccesspointsComponent]
    });
    fixture = TestBed.createComponent(AccesspointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
