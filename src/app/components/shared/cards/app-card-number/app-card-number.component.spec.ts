import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCardNumberComponent } from './app-card-number.component';

describe('AppCardNumberComponent', () => {
  let component: AppCardNumberComponent;
  let fixture: ComponentFixture<AppCardNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppCardNumberComponent]
    });
    fixture = TestBed.createComponent(AppCardNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
