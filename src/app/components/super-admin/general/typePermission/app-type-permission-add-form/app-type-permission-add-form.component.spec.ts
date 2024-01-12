import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTypePermissionAddFormComponent } from './app-type-permission-add-form.component';

describe('AppTypePermissionAddFormComponent', () => {
  let component: AppTypePermissionAddFormComponent;
  let fixture: ComponentFixture<AppTypePermissionAddFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppTypePermissionAddFormComponent]
    });
    fixture = TestBed.createComponent(AppTypePermissionAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
