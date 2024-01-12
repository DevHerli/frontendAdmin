import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSpecialityEditFormComponent } from './app-speciality-edit-form.component';

describe('AppSpecialityEditFormComponent', () => {
  let component: AppSpecialityEditFormComponent;
  let fixture: ComponentFixture<AppSpecialityEditFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppSpecialityEditFormComponent]
    });
    fixture = TestBed.createComponent(AppSpecialityEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
