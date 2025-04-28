import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Sublink } from './sublink.interface';

@Component({
  selector: 'app-dropdown',
  imports: [ButtonComponent],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  @Input({ required: true }) id!: string;
  @Input() classNames?: string;
  @Input() btnText?: string;
  @Input() iconFA?: string;
  @Input() sublinks?: Sublink[];
}
