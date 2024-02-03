import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDoctorsContainerComponent } from './app-doctors-container.component';

describe('AppDoctorsContainerComponent', () => {
  let component: AppDoctorsContainerComponent;
  let fixture: ComponentFixture<AppDoctorsContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppDoctorsContainerComponent]
    });
    fixture = TestBed.createComponent(AppDoctorsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
