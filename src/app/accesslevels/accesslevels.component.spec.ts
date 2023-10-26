import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesslevelsComponent } from './accesslevels.component';

describe('AccesslevelsComponent', () => {
  let component: AccesslevelsComponent;
  let fixture: ComponentFixture<AccesslevelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccesslevelsComponent]
    });
    fixture = TestBed.createComponent(AccesslevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
