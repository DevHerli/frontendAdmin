import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHospitalsContainerComponent } from './app-hospitals-container.component';

describe('AppHospitalsContainerComponent', () => {
  let component: AppHospitalsContainerComponent;
  let fixture: ComponentFixture<AppHospitalsContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppHospitalsContainerComponent]
    });
    fixture = TestBed.createComponent(AppHospitalsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
