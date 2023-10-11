import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLoadingSpinnerComponent } from './app-loading-spinner.component';

describe('AppLoadingSpinnerComponent', () => {
  let component: AppLoadingSpinnerComponent;
  let fixture: ComponentFixture<AppLoadingSpinnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppLoadingSpinnerComponent]
    });
    fixture = TestBed.createComponent(AppLoadingSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
