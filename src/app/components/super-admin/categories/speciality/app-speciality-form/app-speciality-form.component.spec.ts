import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSpecialityFormComponent } from './app-speciality-form.component';

describe('AppSpecialityFormComponent', () => {
  let component: AppSpecialityFormComponent;
  let fixture: ComponentFixture<AppSpecialityFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppSpecialityFormComponent]
    });
    fixture = TestBed.createComponent(AppSpecialityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
