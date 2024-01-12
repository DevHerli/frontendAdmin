import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermitsBusinessComponent } from './permits-business.component';

describe('PermitsBusinessComponent', () => {
  let component: PermitsBusinessComponent;
  let fixture: ComponentFixture<PermitsBusinessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PermitsBusinessComponent]
    });
    fixture = TestBed.createComponent(PermitsBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
