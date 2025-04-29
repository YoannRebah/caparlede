import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { TooltipService } from '../tooltip/tooltip.service';
import { LoaderLocalComponent } from '../loader/loader-local/loader-local.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass, RouterLink, LoaderLocalComponent],
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
  @Input() text?: string;
  @Input() routerLink?: string;

  // TOOLTIP CONFIG
  @Input() tooltipText?: string;
  @Input() tooltipPosition: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() tooltipTrigger: 'hover' | 'click' | 'focus' = 'hover';

  @Output() onClick = new EventEmitter<Event>();

  constructor(private router: Router, private tooltipService: TooltipService) {}

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

  // TOOLTIP EVENTS
  @HostListener('mouseenter', ['$event.target'])
  onMouseEnter(target: HTMLElement): void {
    if (this.tooltipTrigger === 'hover' && this.tooltipText) {
      this.tooltipService.show(target, this.tooltipText, this.tooltipPosition);
    }
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (this.tooltipTrigger === 'hover') {
      this.tooltipService.hide();
    }
  }

  @HostListener('click', ['$event.target'])
  onClickTooltip(target: HTMLElement): void {
    if (this.tooltipTrigger === 'click' && this.tooltipText) {
      this.tooltipService.show(target, this.tooltipText, this.tooltipPosition);
    }
  }

  @HostListener('focus', ['$event.target'])
  onFocus(target: HTMLElement): void {
    if (this.tooltipTrigger === 'focus' && this.tooltipText) {
      this.tooltipService.show(target, this.tooltipText, this.tooltipPosition);
    }
  }

  @HostListener('blur')
  onBlur(): void {
    if (this.tooltipTrigger === 'focus') {
      this.tooltipService.hide();
    }
  }
}
