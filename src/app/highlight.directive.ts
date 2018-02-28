import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackground('#F016A0');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elem.nativeElement.style.backgroundColor = null;
  }


  setBackground(color: string) {
    this.elem.nativeElement.style.background = color;

  }

}
