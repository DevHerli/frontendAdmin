import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountCategoriesComponent } from './count-categories.component';

describe('CountCategoriesComponent', () => {
  let component: CountCategoriesComponent;
  let fixture: ComponentFixture<CountCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountCategoriesComponent]
    });
    fixture = TestBed.createComponent(CountCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
