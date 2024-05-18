import { Component, DestroyRef, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { BillHolderForm, IBillHolder } from '../../../services/dto.interface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { MaybeNull } from '../../../types/maybe-null';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { InputMaskModule } from 'primeng/inputmask';

@Component({
  selector: 'app-bill-holder-form',
  standalone: true,
  imports: [
    ButtonModule,
    InputTextModule,
    PaginatorModule,
    ReactiveFormsModule,
    InputMaskModule
  ],
  templateUrl: './bill-holder-form.component.html',
  styleUrl: './bill-holder-form.component.scss'
})
export class BillHolderFormComponent implements OnInit {
  @Input() formValue: MaybeNull<IBillHolder> = null;
  @Output() formChange = new EventEmitter<IBillHolder>;
  @Output() nextStep = new EventEmitter<void>();
  @Output() stepBack = new EventEmitter<void>();
  private readonly destroyRef = inject(DestroyRef);
  readonly formGroup = new FormGroup(<BillHolderForm>{
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    company: new FormControl(null),
    street: new FormControl('', [Validators.required]),
    zip: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
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

  emitStepBack(): void {
    this.stepBack.emit();
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
          const formValue: IBillHolder = this.formGroup.getRawValue();
          this.formChange.emit(formValue);
        }
      });
  }
}
