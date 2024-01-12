import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesPermitsComponent } from './types-permits.component';

describe('TypesPermitsComponent', () => {
  let component: TypesPermitsComponent;
  let fixture: ComponentFixture<TypesPermitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypesPermitsComponent]
    });
    fixture = TestBed.createComponent(TypesPermitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
