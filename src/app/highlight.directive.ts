import { Directive, ElementRef, HostListener,Input, OnInit } from '@angular/core';
/*#F016A0*/
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective{

  
  @Input() appHighlight: string;

  constructor(private elem: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackground(this.appHighlight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackground();
  }


  setBackground(color: string = null) {
    this.elem.nativeElement.style.background = color;

  }

}
