import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountSpecialityComponent } from './count-speciality.component';

describe('CountSpecialityComponent', () => {
  let component: CountSpecialityComponent;
  let fixture: ComponentFixture<CountSpecialityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountSpecialityComponent]
    });
    fixture = TestBed.createComponent(CountSpecialityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
