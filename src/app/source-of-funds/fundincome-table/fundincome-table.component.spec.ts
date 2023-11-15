import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundincomeTableComponent } from '././fundincome-table.component';

describe('RelationshipTableComponent', () => {
  let component: FundincomeTableComponent;
  let fixture: ComponentFixture<FundincomeTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FundincomeTableComponent]
    });
    fixture = TestBed.createComponent(FundincomeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
