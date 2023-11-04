import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCategoryAddFormComponent } from './app-category-add-form.component';

describe('AppCategoryAddFormComponent', () => {
  let component: AppCategoryAddFormComponent;
  let fixture: ComponentFixture<AppCategoryAddFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppCategoryAddFormComponent]
    });
    fixture = TestBed.createComponent(AppCategoryAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
