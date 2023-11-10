import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSpecialityContainerComponent } from './app-speciality-container.component';

describe('AppSpecialityContainerComponent', () => {
  let component: AppSpecialityContainerComponent;
  let fixture: ComponentFixture<AppSpecialityContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppSpecialityContainerComponent]
    });
    fixture = TestBed.createComponent(AppSpecialityContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
