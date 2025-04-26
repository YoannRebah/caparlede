import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input({ required: true }) id!: string;
  @Input() type: string = 'text';
  @Input() name?: string;
  @Input() placeholder: string = "";
  @Input() required: boolean = false;
  @Input() label?: string;
  @Input() control!: FormControl;
  @Input() value?: any;

  ngOnInit() {
    if (!this.name) {
      this.name = this.id;
    }
  }

  hasError(errorCode: string): boolean {
    return !!this.control?.errors?.[errorCode];
  }
}
