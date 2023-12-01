import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCategoryEditFormComponent } from './app-category-edit-form.component';

describe('AppCategoryEditFormComponent', () => {
  let component: AppCategoryEditFormComponent;
  let fixture: ComponentFixture<AppCategoryEditFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppCategoryEditFormComponent]
    });
    fixture = TestBed.createComponent(AppCategoryEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
