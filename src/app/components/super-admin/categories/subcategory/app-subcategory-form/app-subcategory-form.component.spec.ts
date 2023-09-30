import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSubcategoryFormComponent } from './app-subcategory-form.component';

describe('AppSubcategoryFormComponent', () => {
  let component: AppSubcategoryFormComponent;
  let fixture: ComponentFixture<AppSubcategoryFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppSubcategoryFormComponent]
    });
    fixture = TestBed.createComponent(AppSubcategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
