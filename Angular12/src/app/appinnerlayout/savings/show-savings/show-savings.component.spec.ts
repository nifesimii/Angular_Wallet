import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSavingsComponent } from './show-savings.component';

describe('ShowSavingsComponent', () => {
  let component: ShowSavingsComponent;
  let fixture: ComponentFixture<ShowSavingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSavingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSavingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
