import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarginSubitemComponent } from './margin-subitem.component';

describe('MarginSubitemComponent', () => {
  let component: MarginSubitemComponent;
  let fixture: ComponentFixture<MarginSubitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarginSubitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarginSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
