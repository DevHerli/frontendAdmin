import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAddSubcategoryFormComponent } from './app-add-subcategory-form.component';

describe('AppAddSubcategoryFormComponent', () => {
  let component: AppAddSubcategoryFormComponent;
  let fixture: ComponentFixture<AppAddSubcategoryFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppAddSubcategoryFormComponent]
    });
    fixture = TestBed.createComponent(AppAddSubcategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
