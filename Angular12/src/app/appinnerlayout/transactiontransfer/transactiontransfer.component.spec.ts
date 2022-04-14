import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactiontransferComponent } from './transactiontransfer.component';

describe('TransactiontransferComponent', () => {
  let component: TransactiontransferComponent;
  let fixture: ComponentFixture<TransactiontransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactiontransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactiontransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
