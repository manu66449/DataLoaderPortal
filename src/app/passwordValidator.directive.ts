import { Directive, Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appPasswordvalidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: PasswordvalidatorDirective,
      multi: true,
    },
  ],
})
export class PasswordvalidatorDirective implements Validator {
  constructor(
    @Attribute('appPasswordvalidator') public PasswordControl: string
  ) {}

  validate(control: FormControl) {
    if (control.value === null) {
      return null;
    }

    let isValid = /[A-Z]/.test(control.value);
    if (!isValid) return { capitalCase: true };

    isValid = /[a-z]/.test(control.value);
    if (!isValid) return { smallCase: true };

    isValid = /[!@#$%&*()+=^-]+/.test(control.value);
    if (!isValid) return { specialCase: true };

    return (control.value as string).indexOf(' ') >= 0
      ? { whiteSpace: true }
      : null;
    return null;
  }
}
