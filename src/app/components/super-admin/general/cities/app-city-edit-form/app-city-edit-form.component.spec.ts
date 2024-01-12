import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCityEditFormComponent } from './app-city-edit-form.component';

describe('AppCityEditFormComponent', () => {
  let component: AppCityEditFormComponent;
  let fixture: ComponentFixture<AppCityEditFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppCityEditFormComponent]
    });
    fixture = TestBed.createComponent(AppCityEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
