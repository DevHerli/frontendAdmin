import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCardiologistsContainerComponent } from './app-cardiologists-container.component';

describe('AppCardiologistsContainerComponent', () => {
  let component: AppCardiologistsContainerComponent;
  let fixture: ComponentFixture<AppCardiologistsContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppCardiologistsContainerComponent]
    });
    fixture = TestBed.createComponent(AppCardiologistsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
