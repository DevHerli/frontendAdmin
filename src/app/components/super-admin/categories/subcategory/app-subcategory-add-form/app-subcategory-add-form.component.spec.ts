import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSubcategoryAddFormComponent } from './app-subcategory-add-form.component';

describe('AppSubcategoryAddFormComponent', () => {
  let component: AppSubcategoryAddFormComponent;
  let fixture: ComponentFixture<AppSubcategoryAddFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppSubcategoryAddFormComponent]
    });
    fixture = TestBed.createComponent(AppSubcategoryAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
