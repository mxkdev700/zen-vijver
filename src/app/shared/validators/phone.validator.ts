import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/** Accepts common NL/international phone formats with optional + and spaces. */
const PHONE_PATTERN = /^\+?[0-9][0-9\s\-()]{7,18}$/;

export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = String(control.value ?? '').trim();
    if (!value) {
      return null;
    }
    return PHONE_PATTERN.test(value) ? null : { phone: true };
  };
}
