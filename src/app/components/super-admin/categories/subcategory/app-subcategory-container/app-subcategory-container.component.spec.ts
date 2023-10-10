import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSubcategoryContainerComponent } from './app-subcategory-container.component';

describe('AppSubcategoryContainerComponent', () => {
  let component: AppSubcategoryContainerComponent;
  let fixture: ComponentFixture<AppSubcategoryContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppSubcategoryContainerComponent]
    });
    fixture = TestBed.createComponent(AppSubcategoryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
