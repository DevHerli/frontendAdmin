import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUserPermissionsEditFormComponent } from './app-user-permissions-edit-form.component';

describe('AppUserPermissionsEditFormComponent', () => {
  let component: AppUserPermissionsEditFormComponent;
  let fixture: ComponentFixture<AppUserPermissionsEditFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppUserPermissionsEditFormComponent]
    });
    fixture = TestBed.createComponent(AppUserPermissionsEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
