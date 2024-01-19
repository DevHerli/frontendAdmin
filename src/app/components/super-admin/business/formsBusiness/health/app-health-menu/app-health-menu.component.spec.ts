import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHealthMenuComponent } from './app-health-menu.component';

describe('AppHealthMenuComponent', () => {
  let component: AppHealthMenuComponent;
  let fixture: ComponentFixture<AppHealthMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppHealthMenuComponent]
    });
    fixture = TestBed.createComponent(AppHealthMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
