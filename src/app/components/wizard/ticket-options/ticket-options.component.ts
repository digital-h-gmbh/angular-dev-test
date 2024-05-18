import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MaybeNull } from '../../../types/maybe-null';
import { TicketOption } from '../../../enums/ticket-option';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ISelectItem } from '../../../interfaces/select-item.interface';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { TicketOptionItems } from './ticket-option-items';

@Component({
  selector: 'app-ticket-options',
  standalone: true,
  imports: [
    RadioButtonModule,
    ReactiveFormsModule,
    ButtonModule
  ],
  templateUrl: './ticket-options.component.html',
  styleUrl: './ticket-options.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketOptionsComponent implements OnInit {
  @Input() ticketOption: MaybeNull<TicketOption> = null;
  @Output() ticketOptionChange = new EventEmitter<MaybeNull<TicketOption>>();
  @Output() stepBack = new EventEmitter<void>();
  @Output() nextStep = new EventEmitter<void>();
  private readonly destroyRef = inject(DestroyRef);
  readonly ticketOptionControl = new FormControl<MaybeNull<TicketOption>>(
    null,
    []
  );
  readonly ticketOptionItems = TicketOptionItems;

  ngOnInit(): void {
    this.populateFormValue();
    this.initFormChangeListener();
  }

  emitNextStep(): void {
    this.nextStep.emit();
  }

  emitStepBack(): void {
    this.stepBack.emit();
  }

  private populateFormValue(): void {
    this.ticketOptionControl.setValue(this.ticketOption);
  }

  private initFormChangeListener(): void {
    this.ticketOptionControl.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (value: MaybeNull<TicketOption>): void => {
          this.ticketOptionChange.emit(value);
        }
      });
  }
}
