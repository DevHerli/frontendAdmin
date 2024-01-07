import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCityAddFormComponent } from './app-city-add-form.component';

describe('AppCityAddFormComponent', () => {
  let component: AppCityAddFormComponent;
  let fixture: ComponentFixture<AppCityAddFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppCityAddFormComponent]
    });
    fixture = TestBed.createComponent(AppCityAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
