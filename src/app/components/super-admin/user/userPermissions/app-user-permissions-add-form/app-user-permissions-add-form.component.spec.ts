import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUserPermissionsAddFormComponent } from './app-user-permissions-add-form.component';

describe('AppUserPermissionsAddFormComponent', () => {
  let component: AppUserPermissionsAddFormComponent;
  let fixture: ComponentFixture<AppUserPermissionsAddFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppUserPermissionsAddFormComponent]
    });
    fixture = TestBed.createComponent(AppUserPermissionsAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
