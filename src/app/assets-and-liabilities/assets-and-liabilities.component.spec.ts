import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsAndLiabilitiesComponent } from './assets-and-liabilities.component';

describe('AssetsAndLiabilitiesComponent', () => {
  let component: AssetsAndLiabilitiesComponent;
  let fixture: ComponentFixture<AssetsAndLiabilitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssetsAndLiabilitiesComponent]
    });
    fixture = TestBed.createComponent(AssetsAndLiabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
