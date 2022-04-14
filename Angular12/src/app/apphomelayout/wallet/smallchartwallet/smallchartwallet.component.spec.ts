import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallchartwalletComponent } from './smallchartwallet.component';

describe('SmallchartwalletComponent', () => {
  let component: SmallchartwalletComponent;
  let fixture: ComponentFixture<SmallchartwalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallchartwalletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallchartwalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
