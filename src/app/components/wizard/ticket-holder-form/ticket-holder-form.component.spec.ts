import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketHolderFormComponent } from './ticket-holder-form.component';

describe('TicketHolderFormComponent', () => {
  let component: TicketHolderFormComponent;
  let fixture: ComponentFixture<TicketHolderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketHolderFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TicketHolderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
