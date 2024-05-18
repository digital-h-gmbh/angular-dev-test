import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MaybeNull } from '../../../types/maybe-null';
import { IBillHolder, ITicketHolder } from '../../../interfaces/purchase.interface';
import { NgTemplateOutlet } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TicketOption } from '../../../enums/ticket-option';
import { TicketOptionPipe } from '../../../pipes/ticket-option.pipe';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    ButtonModule,
    TicketOptionPipe
  ],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderSummaryComponent {
  @Input() ticketHolder: MaybeNull<ITicketHolder> = null;
  @Input() billHolder: MaybeNull<IBillHolder> = null;
  @Input() ticketOption: MaybeNull<TicketOption> = null;
  @Input() submitLoading = false;
  @Output() stepBack = new EventEmitter<void>();
  @Output() submitWizard = new EventEmitter<void>();

  emitStepBack(): void {
    this.stepBack.emit();
  }

  emitSubmitWizard(): void {
    this.submitWizard.emit();
  }
}
