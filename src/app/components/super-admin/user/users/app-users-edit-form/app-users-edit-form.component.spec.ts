import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUsersEditFormComponent } from './app-users-edit-form.component';

describe('AppUsersEditFormComponent', () => {
  let component: AppUsersEditFormComponent;
  let fixture: ComponentFixture<AppUsersEditFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppUsersEditFormComponent]
    });
    fixture = TestBed.createComponent(AppUsersEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
