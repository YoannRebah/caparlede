import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { TooltipDirective } from '../tooltip/tooltip.directive';
import { LoaderLocalComponent } from '../loader/loader-local/loader-local.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass, RouterLink, TooltipDirective, LoaderLocalComponent],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() isLoading: boolean = false;

  @Input() id!: string;
  @Input() classNames: string = 'btn-primary btn-base';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() title: string = '';
  @Input() disabled: boolean = false;
  @Input() imgPath?: string;
  @Input() iconFA?: string;
  @Input() iconClassNames?: string;
  @Input() text?: string;
  @Input() textClassNames?: string;
  @Input() routerLink?: string;

  @Input() tooltipText?: string;
  @Input() tooltipPosition: string = 'top';
  @Input() tooltipTrigger: string = 'hover';


  @Output() onClick = new EventEmitter<Event>();

  constructor(private router: Router) {}

  clickEmit(event: Event): void {
    if (this.disabled) {
      event.preventDefault();
      return;
    }

    if (this.routerLink) {
      event.preventDefault();
      this.navigateTo();
    } else {
      this.onClick.emit(event);
    }
  }

  navigateTo(): void {
    if (this.routerLink) {
      this.router.navigate([this.routerLink]);
    }
  }
}
