import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSpecialtiesMenuComponent } from './app-specialties-menu.component';

describe('AppSpecialtiesMenuComponent', () => {
  let component: AppSpecialtiesMenuComponent;
  let fixture: ComponentFixture<AppSpecialtiesMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppSpecialtiesMenuComponent]
    });
    fixture = TestBed.createComponent(AppSpecialtiesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
