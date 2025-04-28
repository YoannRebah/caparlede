import { ApplicationRef, ComponentRef, Injectable, Injector } from '@angular/core';
import { TooltipComponent } from './tooltip.component';

@Injectable({
  providedIn: 'root'
})
export class TooltipService {
  private tooltipRef: ComponentRef<TooltipComponent> | null = null;

  constructor(
    private appRef: ApplicationRef,
  ) {}

  show(target: HTMLElement, text: string, position: 'top' | 'bottom' | 'left' | 'right' = 'top') {
    if (this.tooltipRef) {
      this.hide();
    }

    const tooltip = document.createElement('div');
    document.body.appendChild(tooltip);

    this.tooltipRef = this.appRef.bootstrap(TooltipComponent, tooltip);
    this.tooltipRef.instance.text = text;
    this.tooltipRef.instance.target = target;
    this.tooltipRef.instance.position = position;

    this.tooltipRef.changeDetectorRef.detectChanges();
  }

  hide() {
    if (this.tooltipRef) {
      this.tooltipRef.destroy();
      this.tooltipRef = null;
    }
  }
}
