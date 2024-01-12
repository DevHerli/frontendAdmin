import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFormsBusinessContainerComponent } from './app-forms-business-container.component';

describe('AppFormsBusinessContainerComponent', () => {
  let component: AppFormsBusinessContainerComponent;
  let fixture: ComponentFixture<AppFormsBusinessContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppFormsBusinessContainerComponent]
    });
    fixture = TestBed.createComponent(AppFormsBusinessContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
