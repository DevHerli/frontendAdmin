import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDentistContainerComponent } from './app-dentist-container.component';

describe('AppDentistContainerComponent', () => {
  let component: AppDentistContainerComponent;
  let fixture: ComponentFixture<AppDentistContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppDentistContainerComponent]
    });
    fixture = TestBed.createComponent(AppDentistContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
