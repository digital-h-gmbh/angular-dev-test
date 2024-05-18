import { Component, inject } from '@angular/core';
import { WizardStep } from '../../enums/wizard-step';
import { TicketHolderFormComponent } from './ticket-holder-form/ticket-holder-form.component';
import { BillHolderFormComponent } from './bill-holder-form/bill-holder-form.component';
import { MaybeNull } from '../../types/maybe-null';
import { IBillHolder, ITicketHolder } from '../../interfaces/purchase.interface';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { ApiService } from '../../services/api.service';
import { TicketOption } from '../../enums/ticket-option';
import { TicketOptionsComponent } from './ticket-options/ticket-options.component';

@Component({
  selector: 'app-wizard',
  standalone: true,
  imports: [
    TicketHolderFormComponent,
    BillHolderFormComponent,
    OrderSummaryComponent,
    TicketOptionsComponent
  ],
  templateUrl: './wizard.component.html',
  styleUrl: './wizard.component.scss'
})
export class WizardComponent {
  private readonly apiService = inject(ApiService);
  readonly wizardStep = WizardStep;
  currentWizardStep = WizardStep.TicketHolderForm;
  ticketHolder: MaybeNull<ITicketHolder> = null;
  billHolder: MaybeNull<IBillHolder> = null;
  ticketOption: MaybeNull<TicketOption> = null;

  setCurrentWizardStep(step: WizardStep): void {
    this.currentWizardStep = step;
  }

  setTicketHolder(value: MaybeNull<ITicketHolder>): void {
    this.ticketHolder = value;
  }

  setBillHolder(value: MaybeNull<IBillHolder>): void {
    this.billHolder = value;
  }

  setTicketOption(value: MaybeNull<TicketOption>): void {
    this.ticketOption = value;
  }

  submitWizard(): void {
    if (!this.ticketHolder || !this.billHolder) {
      return;
    }
    this.apiService.store({
      ticketHolder: this.ticketHolder,
      invoicingHolder: this.billHolder,
      ticketOption: this.ticketOption,
    });
    this.resetWizard();
    alert('Bestellprozess erfolgreich abgeschlossen');
  }

  private resetWizard(): void {
    this.setCurrentWizardStep(WizardStep.TicketHolderForm);
    this.setTicketHolder(null);
    this.setBillHolder(null);
    this.setTicketOption(null);
  }
}
