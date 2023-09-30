import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCategoryFormComponent } from './app-category-form.component';

describe('AppCategoryFormComponent', () => {
  let component: AppCategoryFormComponent;
  let fixture: ComponentFixture<AppCategoryFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppCategoryFormComponent]
    });
    fixture = TestBed.createComponent(AppCategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
