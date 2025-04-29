import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { LoaderLocalComponent } from '../loader/loader-local/loader-local.component';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule, LoaderLocalComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() isLoading: boolean = false;

  @Input({ required: true }) id!: string;
  @Input() classNames?: string;
  
  @Input() type: string = 'text';
  @Input() name?: string;
  @Input() placeholder: string = "";
  @Input() required: boolean = false;
  @Input() label?: string;
  @Input() control!: FormControl;
  @Input() value?: any;
  @Input() showEye: boolean = false;
  
  showPassword: boolean = false;

  ngOnInit() {
    if (!this.name) {
      this.name = this.id;
    }
  }

  hasError(errorCode: string): boolean {
    return !!this.control?.errors?.[errorCode];
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
    if(this.showPassword) {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }
}
