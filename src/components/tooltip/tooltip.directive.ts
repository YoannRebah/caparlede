import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { TooltipService } from './tooltip.service';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  @Input('appTooltip') text = '';
  @Input() tooltipPosition: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() tooltipTrigger: 'hover' | 'click' | 'focus' = 'hover';

  constructor(
    private el: ElementRef,
    private tooltipService: TooltipService
  ) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.tooltipTrigger === 'hover') {
      this.tooltipService.show(this.el.nativeElement, this.text, this.tooltipPosition);
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.tooltipTrigger === 'hover') {
      this.tooltipService.hide();
    }
  }

  @HostListener('click')
  onClick() {
    if (this.tooltipTrigger === 'click') {
      this.tooltipService.show(this.el.nativeElement, this.text, this.tooltipPosition);
    }
  }

  @HostListener('focus')
  onFocus() {
    if (this.tooltipTrigger === 'focus') {
      this.tooltipService.show(this.el.nativeElement, this.text, this.tooltipPosition);
    }
  }

  @HostListener('blur')
  onBlur() {
    if (this.tooltipTrigger === 'focus') {
      this.tooltipService.hide();
    }
  }
}
