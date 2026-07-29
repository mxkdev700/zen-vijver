import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { Button } from '../../../shared/components/button/button';
import { emailOrPhoneValidator } from '../../../shared/validators/email-or-phone/email-or-phone.validator';
import { phoneValidator } from '../../../shared/validators/phone.validator';

@Component({
  selector: 'zen-quote-form',
  imports: [ReactiveFormsModule, TranslatePipe, Button],
  templateUrl: './quote-form.html',
  styleUrl: './quote-form.scss',
})
export class QuoteForm {
  private readonly fb = inject(FormBuilder);

  readonly submitted = signal(false);
  readonly submitSuccess = signal(false);

  readonly projectTypes = [
    { value: 'garden-pond', labelKey: 'QUOTE.TYPES.GARDEN' },
    { value: 'swim-pond', labelKey: 'QUOTE.TYPES.SWIM' },
    { value: 'koi-pond', labelKey: 'QUOTE.TYPES.KOI' },
    { value: 'equipment', labelKey: 'QUOTE.TYPES.EQUIPMENT' },
    { value: 'other', labelKey: 'QUOTE.TYPES.OTHER' },
  ];

  readonly form = this.fb.nonNullable.group(
    {
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.email]],
      phone: ['', [phoneValidator()]],
      projectType: [''],
      location: [''],
      budget: [''],
      details: ['', [Validators.required, Validators.minLength(10)]],
    },
    { validators: [emailOrPhoneValidator()] },
  );

  get controls() {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.info('Quote form payload', this.form.getRawValue());
    this.submitSuccess.set(true);
    this.form.reset();
    this.submitted.set(false);
  }
}
