import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLaboratoriesContainerComponent } from './app-laboratories-container.component';

describe('AppLaboratoriesContainerComponent', () => {
  let component: AppLaboratoriesContainerComponent;
  let fixture: ComponentFixture<AppLaboratoriesContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppLaboratoriesContainerComponent]
    });
    fixture = TestBed.createComponent(AppLaboratoriesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
