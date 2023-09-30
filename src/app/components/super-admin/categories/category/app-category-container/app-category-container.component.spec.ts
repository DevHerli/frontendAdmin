import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCategoryContainerComponent } from './app-category-container.component';

describe('AppCategoryContainerComponent', () => {
  let component: AppCategoryContainerComponent;
  let fixture: ComponentFixture<AppCategoryContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppCategoryContainerComponent]
    });
    fixture = TestBed.createComponent(AppCategoryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
