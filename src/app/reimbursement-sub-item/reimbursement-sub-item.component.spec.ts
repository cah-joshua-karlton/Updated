import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbursementSubItemComponent } from './reimbursement-sub-item.component';

describe('ReimbursementSubItemComponent', () => {
  let component: ReimbursementSubItemComponent;
  let fixture: ComponentFixture<ReimbursementSubItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReimbursementSubItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimbursementSubItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
