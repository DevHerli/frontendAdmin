import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSwitchToggleComponent } from './app-switch-toggle.component';

describe('AppSwitchToggleComponent', () => {
  let component: AppSwitchToggleComponent;
  let fixture: ComponentFixture<AppSwitchToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppSwitchToggleComponent]
    });
    fixture = TestBed.createComponent(AppSwitchToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
