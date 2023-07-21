import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuKardexComponent } from './menu-kardex.component';

describe('MenuKardexComponent', () => {
  let component: MenuKardexComponent;
  let fixture: ComponentFixture<MenuKardexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuKardexComponent]
    });
    fixture = TestBed.createComponent(MenuKardexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
