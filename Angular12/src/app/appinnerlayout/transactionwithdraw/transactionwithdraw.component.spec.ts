import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionwithdrawComponent } from './transactionwithdraw.component';

describe('TransactionwithdrawComponent', () => {
  let component: TransactionwithdrawComponent;
  let fixture: ComponentFixture<TransactionwithdrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionwithdrawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionwithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
