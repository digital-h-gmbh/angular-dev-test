import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MaybeNull } from '../../../types/maybe-null';
import { IBillHolder, ITicketHolder } from '../../../interfaces/purchase.interface';
import { NgTemplateOutlet } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    ButtonModule
  ],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderSummaryComponent {
  @Input() ticketHolder: MaybeNull<ITicketHolder> = null;
  @Input() billHolder: MaybeNull<IBillHolder> = null;
  @Output() stepBack = new EventEmitter<void>();
  @Output() submitWizard = new EventEmitter<void>();

  emitStepBack(): void {
    this.stepBack.emit();
  }

  emitSubmitWizard(): void {
    this.submitWizard.emit();
  }
}
