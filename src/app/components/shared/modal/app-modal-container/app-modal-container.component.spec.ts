import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModalContainerComponent } from './app-modal-container.component';

describe('AppModalContainerComponent', () => {
  let component: AppModalContainerComponent;
  let fixture: ComponentFixture<AppModalContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppModalContainerComponent]
    });
    fixture = TestBed.createComponent(AppModalContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
