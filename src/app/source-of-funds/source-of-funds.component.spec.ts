import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceOfFundsComponent } from './source-of-funds.component';

describe('SourceOfFundsComponent', () => {
  let component: SourceOfFundsComponent;
  let fixture: ComponentFixture<SourceOfFundsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SourceOfFundsComponent]
    });
    fixture = TestBed.createComponent(SourceOfFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
