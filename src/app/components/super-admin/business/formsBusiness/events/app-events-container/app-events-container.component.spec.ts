import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEventsContainerComponent } from './app-events-container.component';

describe('AppEventsContainerComponent', () => {
  let component: AppEventsContainerComponent;
  let fixture: ComponentFixture<AppEventsContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppEventsContainerComponent]
    });
    fixture = TestBed.createComponent(AppEventsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
