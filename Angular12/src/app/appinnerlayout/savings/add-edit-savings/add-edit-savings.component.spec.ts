import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSavingsComponent } from './add-edit-savings.component';

describe('AddEditSavingsComponent', () => {
  let component: AddEditSavingsComponent;
  let fixture: ComponentFixture<AddEditSavingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSavingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSavingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
