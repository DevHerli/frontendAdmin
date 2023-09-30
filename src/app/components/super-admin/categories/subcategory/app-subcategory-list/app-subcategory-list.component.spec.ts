import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSubcategoryListComponent } from './app-subcategory-list.component';

describe('AppSubcategoryListComponent', () => {
  let component: AppSubcategoryListComponent;
  let fixture: ComponentFixture<AppSubcategoryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppSubcategoryListComponent]
    });
    fixture = TestBed.createComponent(AppSubcategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
