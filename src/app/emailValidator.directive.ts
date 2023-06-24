import { Directive } from '@angular/core';
import {
  Validator,
  NG_VALIDATORS,
  ValidatorFn,
  FormControl,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Directive({
  selector: '[appEmailvalidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: EmailvalidatorDirective,
      multi: true,
    },
  ],
})
export class EmailvalidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value != null && control.value !== '') {
      let isValid =
        /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(
          control.value
        );
      if (isValid) {
        return null;
      } else {
        return {
          emailvalidator: { valid: false },
        };
      }
    } else {
      return null;
    }
  }
}
