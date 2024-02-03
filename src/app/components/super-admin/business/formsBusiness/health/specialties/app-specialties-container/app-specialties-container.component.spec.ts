import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSpecialtiesContainerComponent } from './app-specialties-container.component';

describe('AppSpecialtiesContainerComponent', () => {
  let component: AppSpecialtiesContainerComponent;
  let fixture: ComponentFixture<AppSpecialtiesContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppSpecialtiesContainerComponent]
    });
    fixture = TestBed.createComponent(AppSpecialtiesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
