import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
})
export class ScrollAnimationDirective {

  private delay!: string;

  @HostListener('window:scroll', [])
  scroll(): void {
    const rect = this.el.nativeElement.getBoundingClientRect();
    console.log(rect);
    let scroll = this.mapRange(window.innerHeight, rect.top + rect.height / 2);

    scroll = scroll < 0 ? 0 : scroll > 1 ? 1 : scroll;
    this.delay = `-${scroll.toFixed(10)}s`;
    console.log(scroll);
  }

  @HostBinding('style.animationDelay') get animationDelay(): string {
    return this.delay;
  }

  private mapRange(a2: number, value: number): number {
    return value / a2;
  }

  constructor(private el: ElementRef) {}
}
