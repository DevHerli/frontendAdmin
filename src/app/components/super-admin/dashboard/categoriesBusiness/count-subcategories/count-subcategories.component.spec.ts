import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountSubcategoriesComponent } from './count-subcategories.component';

describe('CountSubcategoriesComponent', () => {
  let component: CountSubcategoriesComponent;
  let fixture: ComponentFixture<CountSubcategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountSubcategoriesComponent]
    });
    fixture = TestBed.createComponent(CountSubcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
