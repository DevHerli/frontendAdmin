import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSubcategoryEditFormComponent } from './app-subcategory-edit-form.component';

describe('AppSubcategoryEditFormComponent', () => {
  let component: AppSubcategoryEditFormComponent;
  let fixture: ComponentFixture<AppSubcategoryEditFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppSubcategoryEditFormComponent]
    });
    fixture = TestBed.createComponent(AppSubcategoryEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
