import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRestaurantContainerComponent } from './app-restaurant-container.component';

describe('AppRestaurantContainerComponent', () => {
  let component: AppRestaurantContainerComponent;
  let fixture: ComponentFixture<AppRestaurantContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppRestaurantContainerComponent]
    });
    fixture = TestBed.createComponent(AppRestaurantContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
