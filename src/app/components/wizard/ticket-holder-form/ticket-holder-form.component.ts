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
import { InputTextModule } from 'primeng/inputtext';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ITicketHolder, TicketHolderForm } from '../../../services/dto.interface';
import { ButtonModule } from 'primeng/button';
import { MaybeNull } from '../../../types/maybe-null';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-ticket-holder-form',
  standalone: true,
  imports: [
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    CheckboxModule
  ],
  templateUrl: './ticket-holder-form.component.html',
  styleUrl: './ticket-holder-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketHolderFormComponent implements OnInit {
  @Input() formValue: MaybeNull<ITicketHolder> = null;
  @Output() formChange = new EventEmitter<ITicketHolder>();
  @Output() nextStep = new EventEmitter<void>();
  private readonly destroyRef = inject(DestroyRef);
  readonly formGroup = new FormGroup(<TicketHolderForm>{
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    adoptForBill: new FormControl(false, []),
  });

  ngOnInit(): void {
   this.populateFormValue();
   this.initFormChangeListener();
  }

  emitNextStep(): void {
    if (!this.formGroup.valid) {
      return;
    }
    this.nextStep.emit();
  }

  private populateFormValue(): void {
    if (!this.formValue) {
      return;
    }
    this.formGroup.patchValue(this.formValue);
  }

  private initFormChangeListener(): void {
    this.formGroup.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (): void => {
          const formValue: ITicketHolder = this.formGroup.getRawValue();
          this.formChange.emit(formValue);
        }
      });
  }
}
