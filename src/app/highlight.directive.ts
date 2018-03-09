import { Directive, ElementRef, HostListener, Input, OnInit, OnChanges, DoCheck } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor: string;

  @Input() defaultColor: string;

  private ultimateDefaultColor: string = 'red';

  constructor(private elem: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackGround(this.highlightColor || this.defaultColor || this.ultimateDefaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackGround();
  }

  setBackGround(color: string = null){
    this.elem.nativeElement.style.background = color;
  }

}