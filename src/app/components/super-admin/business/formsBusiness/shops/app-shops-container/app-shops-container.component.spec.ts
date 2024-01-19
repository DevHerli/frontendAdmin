import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppShopsContainerComponent } from './app-shops-container.component';

describe('AppShopsContainerComponent', () => {
  let component: AppShopsContainerComponent;
  let fixture: ComponentFixture<AppShopsContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppShopsContainerComponent]
    });
    fixture = TestBed.createComponent(AppShopsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
