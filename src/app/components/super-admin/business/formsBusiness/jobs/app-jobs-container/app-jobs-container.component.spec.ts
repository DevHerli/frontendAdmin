import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppJobsContainerComponent } from './app-jobs-container.component';

describe('AppJobsContainerComponent', () => {
  let component: AppJobsContainerComponent;
  let fixture: ComponentFixture<AppJobsContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppJobsContainerComponent]
    });
    fixture = TestBed.createComponent(AppJobsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
