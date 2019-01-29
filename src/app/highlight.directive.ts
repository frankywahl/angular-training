import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { MockNgModuleResolver } from '@angular/compiler/testing';

@Directive({
  selector: '[appHighlight]',
  host: {
    '[style.backgroundColor]': 'bgColor',
    '(mouseover)': 'mouseOver()',
    '(mouseout)': 'mouseOut()',
  }
})
export class HighlightDirective {

  @Input('appHighlight') color = '#F5F5F5';
  bgColor;

  mouseOver() {
    this.bgColor = this.color;
  }

  mouseOut() {
    this.bgColor = '';
  }

  constructor() { }

}
