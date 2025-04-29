import {
    Directive,
    ElementRef,
    Input,
    Renderer2,
    OnChanges,
    SimpleChanges,
    OnDestroy
  } from '@angular/core';
  
  @Directive({
    selector: '[appLoadingOverlay]',
    standalone: true
  })
  export class LoadingOverlayDirective implements OnChanges, OnDestroy {
    @Input('appLoadingOverlay') isLoading: boolean = false;
  
    private overlayElement: HTMLElement | null = null;
    private parent: HTMLElement;
  
    constructor(private el: ElementRef, private renderer: Renderer2) {
      this.parent = this.renderer.parentNode(this.el.nativeElement);
    }
  
    ngOnChanges(changes: SimpleChanges): void {
      if (changes['isLoading']) {
        this.toggleOverlay(this.isLoading);
      }
    }
  
    ngOnDestroy(): void {
      this.removeOverlay();
    }
  
    private toggleOverlay(show: boolean): void {
      if (show) {
        this.addOverlay();
      } else {
        this.removeOverlay();
      }
    }
  
    private addOverlay(): void {
      if (this.overlayElement) return;
  
      this.overlayElement = this.renderer.createElement('div');
      this.renderer.addClass(this.overlayElement, 'absolute');
      this.renderer.addClass(this.overlayElement, 'top-0');
      this.renderer.addClass(this.overlayElement, 'left-0');
      this.renderer.addClass(this.overlayElement, 'w-full');
      this.renderer.addClass(this.overlayElement, 'h-full');
      this.renderer.addClass(this.overlayElement, 'bg-gray-700/40');
      this.renderer.addClass(this.overlayElement, 'z-10');
      this.renderer.addClass(this.overlayElement, 'flex');
      this.renderer.addClass(this.overlayElement, 'items-center');
      this.renderer.addClass(this.overlayElement, 'justify-center');
      this.renderer.addClass(this.overlayElement, 'rounded-xl');
  
      const loader = this.renderer.createElement('div');
      this.renderer.addClass(loader, 'loader');
      this.renderer.addClass(loader, 'loader-screen');
  
      const spinner = this.renderer.createElement('div');
      this.renderer.addClass(spinner, 'spinner');
      this.renderer.addClass(spinner, 'spinner-s');
  
      this.renderer.appendChild(loader, spinner);
      this.renderer.appendChild(this.overlayElement, loader);
      this.renderer.appendChild(this.parent, this.overlayElement);
  
      this.renderer.addClass(this.parent, 'relative');
      this.renderer.setStyle(this.parent, 'pointer-events', 'none');
    }
  
    private removeOverlay(): void {
      if (this.overlayElement && this.parent.contains(this.overlayElement)) {
        this.renderer.removeChild(this.parent, this.overlayElement);
        this.overlayElement = null;
      }
  
      this.renderer.setStyle(this.parent, 'pointer-events', 'auto');
    }
  }
  