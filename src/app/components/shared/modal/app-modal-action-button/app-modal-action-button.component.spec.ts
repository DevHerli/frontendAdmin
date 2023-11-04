import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModalActionButtonComponent } from './app-modal-action-button.component';

describe('AppModalActionButtonComponent', () => {
  let component: AppModalActionButtonComponent;
  let fixture: ComponentFixture<AppModalActionButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppModalActionButtonComponent]
    });
    fixture = TestBed.createComponent(AppModalActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
