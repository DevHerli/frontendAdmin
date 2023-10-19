import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCleanButtonComponent } from './app-clean-button.component';

describe('AppCleanButtonComponent', () => {
  let component: AppCleanButtonComponent;
  let fixture: ComponentFixture<AppCleanButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppCleanButtonComponent]
    });
    fixture = TestBed.createComponent(AppCleanButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
