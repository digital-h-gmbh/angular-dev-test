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
import { from, take } from 'rxjs';

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
  submitWizardLoading = false;

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

  setSubmitWizardLoading(loading: boolean): void {
    this.submitWizardLoading = loading;
  }

  submitWizard(): void {
    if (!this.ticketHolder || !this.billHolder || this.submitWizardLoading) {
      return;
    }
    this.setSubmitWizardLoading(true);
    from(this.apiService.store({
      ticketHolder: this.ticketHolder,
      invoicingHolder: this.billHolder,
      ticketOption: this.ticketOption,
    })).pipe(take(1))
      .subscribe({
        next: (): void => {
          alert('Bestellprozess erfolgreich abgeschlossen');
          this.resetWizard();
          this.setSubmitWizardLoading(false);
        },
        error: (): void => {
          alert('Fehler beim abschließen des Bestellprozesses. Bitte versuche es erneut.');
          this.setSubmitWizardLoading(false);
        }
      });
  }

  private resetWizard(): void {
    this.setCurrentWizardStep(WizardStep.TicketHolderForm);
    this.setTicketHolder(null);
    this.setBillHolder(null);
    this.setTicketOption(null);
  }
}
