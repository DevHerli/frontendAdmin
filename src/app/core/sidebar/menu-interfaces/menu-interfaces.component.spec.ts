import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuInterfacesComponent } from './menu-interfaces.component';

describe('MenuInterfacesComponent', () => {
  let component: MenuInterfacesComponent;
  let fixture: ComponentFixture<MenuInterfacesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuInterfacesComponent]
    });
    fixture = TestBed.createComponent(MenuInterfacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
