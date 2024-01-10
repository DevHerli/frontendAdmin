import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermitsUsersComponent } from './permits-users.component';

describe('PermitsUsersComponent', () => {
  let component: PermitsUsersComponent;
  let fixture: ComponentFixture<PermitsUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PermitsUsersComponent]
    });
    fixture = TestBed.createComponent(PermitsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
