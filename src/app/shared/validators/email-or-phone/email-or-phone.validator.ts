import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/** Requires at least one of the given controls to have a non-empty trimmed value. */
export function emailOrPhoneValidator(
  emailKey = 'email',
  phoneKey = 'phone',
): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const email = String(group.get(emailKey)?.value ?? '').trim();
    const phone = String(group.get(phoneKey)?.value ?? '').trim();
    return email || phone ? null : { emailOrPhone: true };
  };
}
