import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPharmacyContainerComponent } from './app-pharmacy-container.component';

describe('AppPharmacyContainerComponent', () => {
  let component: AppPharmacyContainerComponent;
  let fixture: ComponentFixture<AppPharmacyContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppPharmacyContainerComponent]
    });
    fixture = TestBed.createComponent(AppPharmacyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
