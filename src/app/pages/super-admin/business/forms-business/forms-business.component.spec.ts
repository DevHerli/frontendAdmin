import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsBusinessComponent } from './forms-business.component';

describe('FormsBusinessComponent', () => {
  let component: FormsBusinessComponent;
  let fixture: ComponentFixture<FormsBusinessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsBusinessComponent]
    });
    fixture = TestBed.createComponent(FormsBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
