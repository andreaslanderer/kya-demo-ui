import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceOfWealthComponent } from './source-of-wealth.component';

describe('SourceOfWealthComponent', () => {
  let component: SourceOfWealthComponent;
  let fixture: ComponentFixture<SourceOfWealthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SourceOfWealthComponent]
    });
    fixture = TestBed.createComponent(SourceOfWealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
