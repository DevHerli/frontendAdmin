import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTypePermissionEditFormComponent } from './app-type-permission-edit-form.component';

describe('AppTypePermissionEditFormComponent', () => {
  let component: AppTypePermissionEditFormComponent;
  let fixture: ComponentFixture<AppTypePermissionEditFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppTypePermissionEditFormComponent]
    });
    fixture = TestBed.createComponent(AppTypePermissionEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
