import { Component, ElementRef, Input, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements AfterViewInit {
  @Input() text!: string;
  @Input() position: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() target!: HTMLElement;

  @ViewChild('tooltipRef') tooltipRef!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.target && this.tooltipRef) {
        this.setPosition();
      }
    }, 0);
  }

  setPosition(): void {
    if (!this.target || !this.tooltipRef) {
      console.warn('TooltipComponent: Missing target or tooltipRef');
      return;
    }

    const rect = this.target.getBoundingClientRect();
    const tooltip = this.tooltipRef.nativeElement;

    let top = rect.top;
    let left = rect.left;

    switch (this.position) {
      case 'top':
        top -= tooltip.offsetHeight + 8;
        left += (rect.width - tooltip.offsetWidth) / 2;
        break;
      case 'bottom':
        top += rect.height + 8;
        left += (rect.width - tooltip.offsetWidth) / 2;
        break;
      case 'left':
        top += (rect.height - tooltip.offsetHeight) / 2;
        left -= tooltip.offsetWidth + 8;
        break;
      case 'right':
        top += (rect.height - tooltip.offsetHeight) / 2;
        left += rect.width + 8;
        break;
    }

    tooltip.style.top = `${Math.max(top, 0)}px`;
    tooltip.style.left = `${Math.max(left, 0)}px`;
  }
}
