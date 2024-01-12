import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUsersContainerComponent } from './app-users-container.component';

describe('AppUsersContainerComponent', () => {
  let component: AppUsersContainerComponent;
  let fixture: ComponentFixture<AppUsersContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppUsersContainerComponent]
    });
    fixture = TestBed.createComponent(AppUsersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
