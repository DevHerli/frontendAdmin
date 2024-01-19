import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPubsContainerComponent } from './app-pubs-container.component';

describe('AppPubsContainerComponent', () => {
  let component: AppPubsContainerComponent;
  let fixture: ComponentFixture<AppPubsContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppPubsContainerComponent]
    });
    fixture = TestBed.createComponent(AppPubsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
