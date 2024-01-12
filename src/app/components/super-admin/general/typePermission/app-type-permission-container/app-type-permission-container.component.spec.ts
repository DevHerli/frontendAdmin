import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTypePermissionContainerComponent } from './app-type-permission-container.component';

describe('AppTypePermissionContainerComponent', () => {
  let component: AppTypePermissionContainerComponent;
  let fixture: ComponentFixture<AppTypePermissionContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppTypePermissionContainerComponent]
    });
    fixture = TestBed.createComponent(AppTypePermissionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
