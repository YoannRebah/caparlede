import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
} from '@angular/core';
import { TooltipService } from './tooltip.service';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements OnDestroy {

  @Input('appTooltip') tooltipText?: string;
  @Input() tooltipPosition:string = 'top'; // 'top' | 'bottom' | 'left' | 'right'
  @Input() tooltipTrigger:string = 'hover'; // 'hover' | 'click' | 'focus'

  constructor(
    private el: ElementRef<HTMLElement>,
    private tooltipService: TooltipService
  ) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (this.tooltipTrigger === 'hover' && this.tooltipText) {
      this.tooltipService.show(this.el.nativeElement, this.tooltipText, this.tooltipPosition);
    }
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (this.tooltipTrigger === 'hover') {
      this.tooltipService.hide();
    }
  }

  @HostListener('click')
  onClick(): void {
    if (this.tooltipTrigger === 'click' && this.tooltipText) {
      this.tooltipService.show(this.el.nativeElement, this.tooltipText, this.tooltipPosition);
    }
  }

  @HostListener('focus')
  onFocus(): void {
    if (this.tooltipTrigger === 'focus' && this.tooltipText) {
      this.tooltipService.show(this.el.nativeElement, this.tooltipText, this.tooltipPosition);
    }
  }

  @HostListener('blur')
  onBlur(): void {
    if (this.tooltipTrigger === 'focus') {
      this.tooltipService.hide();
    }
  }

  ngOnDestroy(): void {
    this.tooltipService.hide();
  }
}
