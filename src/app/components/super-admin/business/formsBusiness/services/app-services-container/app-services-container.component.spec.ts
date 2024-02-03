import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppServicesContainerComponent } from './app-services-container.component';

describe('AppServicesContainerComponent', () => {
  let component: AppServicesContainerComponent;
  let fixture: ComponentFixture<AppServicesContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppServicesContainerComponent]
    });
    fixture = TestBed.createComponent(AppServicesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
