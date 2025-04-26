import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private fb: FormBuilder) {}

  private controlConfigs: { [key: string]: { value: any, validators: any[] } } = {
    email: {
      value: '',
      validators: [Validators.required, Validators.email]
    },
    username: {
      value: '',
      validators: [Validators.required, Validators.minLength(5), Validators.maxLength(15)]
    },
    password: {
      value: '',
      validators: [
        Validators.required, 
        Validators.minLength(8),
        Validators.pattern(/[A-Z]/), // majuscule
        Validators.pattern(/[^a-zA-Z0-9]/), // caractère spécial
      ],
    },
    checked: {
      value: false, 
      validators: [Validators.requiredTrue]
    },
  };

  createForm(keys: string[]): FormGroup {
    const group: { [key: string]: FormControl } = {};

    for (const key of keys) {
      const config = this.controlConfigs[key];
      if (config) {
        group[key] = this.fb.control(config.value, config.validators);
      } else {
        group[key] = new FormControl('');
      }
    }

    return this.fb.group(group);
  }

  getFormControl(form: FormGroup, controlName: string): FormControl {
    const control = form.get(controlName);
    if (control instanceof FormControl) {
      return control;
    }
    return new FormControl('');
  }
}
