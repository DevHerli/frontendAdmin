import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAddSpecialityFormComponent } from './app-add-speciality-form.component';

describe('AppAddSpecialityFormComponent', () => {
  let component: AppAddSpecialityFormComponent;
  let fixture: ComponentFixture<AppAddSpecialityFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppAddSpecialityFormComponent]
    });
    fixture = TestBed.createComponent(AppAddSpecialityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
