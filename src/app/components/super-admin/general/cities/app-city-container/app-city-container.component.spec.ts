import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCityContainerComponent } from './app-city-container.component';

describe('AppCityContainerComponent', () => {
  let component: AppCityContainerComponent;
  let fixture: ComponentFixture<AppCityContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppCityContainerComponent]
    });
    fixture = TestBed.createComponent(AppCityContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
