import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUserPermissionsContainerComponent } from './app-user-permissions-container.component';

describe('AppUserPermissionsContainerComponent', () => {
  let component: AppUserPermissionsContainerComponent;
  let fixture: ComponentFixture<AppUserPermissionsContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppUserPermissionsContainerComponent]
    });
    fixture = TestBed.createComponent(AppUserPermissionsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
