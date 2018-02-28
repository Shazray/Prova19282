import { Directive, ElementRef, HostListener,Input } from '@angular/core';
/*#F016A0*/
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() highlightColor: string;

  constructor(private elem: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackground(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackground();
  }


  setBackground(color: string = null) {
    this.elem.nativeElement.style.background = color;

  }

}
