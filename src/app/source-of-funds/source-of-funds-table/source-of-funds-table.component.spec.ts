import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceOfWealthTableComponent } from './source-of-wealth-table.component';

describe('SourceOfWealthTableComponent', () => {
  let component: SourceOfWealthTableComponent;
  let fixture: ComponentFixture<SourceOfWealthTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SourceOfWealthTableComponent]
    });
    fixture = TestBed.createComponent(SourceOfWealthTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
