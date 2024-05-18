import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillHolderFormComponent } from './bill-holder-form.component';

describe('BillHolderFormComponent', () => {
  let component: BillHolderFormComponent;
  let fixture: ComponentFixture<BillHolderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillHolderFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BillHolderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
