import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSpecialityListComponent } from './app-speciality-list.component';

describe('AppSpecialityListComponent', () => {
  let component: AppSpecialityListComponent;
  let fixture: ComponentFixture<AppSpecialityListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppSpecialityListComponent]
    });
    fixture = TestBed.createComponent(AppSpecialityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
