import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGeneralButtonsComponent } from './app-general-buttons.component';

describe('AppGeneralButtonsComponent', () => {
  let component: AppGeneralButtonsComponent;
  let fixture: ComponentFixture<AppGeneralButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppGeneralButtonsComponent]
    });
    fixture = TestBed.createComponent(AppGeneralButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
