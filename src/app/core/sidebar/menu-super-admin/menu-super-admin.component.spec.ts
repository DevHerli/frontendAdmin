import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSuperAdminComponent } from './menu-super-admin.component';

describe('MenuSuperAdminComponent', () => {
  let component: MenuSuperAdminComponent;
  let fixture: ComponentFixture<MenuSuperAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuSuperAdminComponent]
    });
    fixture = TestBed.createComponent(MenuSuperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
