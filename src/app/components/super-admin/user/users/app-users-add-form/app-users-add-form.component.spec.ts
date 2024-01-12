import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUsersAddFormComponent } from './app-users-add-form.component';

describe('AppUsersAddFormComponent', () => {
  let component: AppUsersAddFormComponent;
  let fixture: ComponentFixture<AppUsersAddFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppUsersAddFormComponent]
    });
    fixture = TestBed.createComponent(AppUsersAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
