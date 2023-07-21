import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTicketsComponent } from './menu-tickets.component';

describe('MenuTicketsComponent', () => {
  let component: MenuTicketsComponent;
  let fixture: ComponentFixture<MenuTicketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuTicketsComponent]
    });
    fixture = TestBed.createComponent(MenuTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
