import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactiontopupComponent } from './transactiontopup.component';

describe('TransactiontopupComponent', () => {
  let component: TransactiontopupComponent;
  let fixture: ComponentFixture<TransactiontopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactiontopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactiontopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
