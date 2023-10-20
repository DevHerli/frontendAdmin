import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCategoryDropdownComponent } from './app-category-dropdown.component';

describe('AppCategoryDropdownComponent', () => {
  let component: AppCategoryDropdownComponent;
  let fixture: ComponentFixture<AppCategoryDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppCategoryDropdownComponent]
    });
    fixture = TestBed.createComponent(AppCategoryDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
