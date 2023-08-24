import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSaveButtonComponent } from './app-save-button.component';

describe('AppSaveButtonComponent', () => {
  let component: AppSaveButtonComponent;
  let fixture: ComponentFixture<AppSaveButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppSaveButtonComponent]
    });
    fixture = TestBed.createComponent(AppSaveButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
