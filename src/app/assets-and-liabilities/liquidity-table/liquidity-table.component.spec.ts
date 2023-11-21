import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidityTableComponent } from './liquidity-table.component';

describe('LiquidityTableComponent', () => {
  let component: LiquidityTableComponent;
  let fixture: ComponentFixture<LiquidityTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiquidityTableComponent]
    });
    fixture = TestBed.createComponent(LiquidityTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
