import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSpecialityAddFormComponent } from './app-speciality-add-form.component';

describe('AppSpecialityAddFormComponent', () => {
  let component: AppSpecialityAddFormComponent;
  let fixture: ComponentFixture<AppSpecialityAddFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppSpecialityAddFormComponent]
    });
    fixture = TestBed.createComponent(AppSpecialityAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
