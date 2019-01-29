import { Directive, HostBinding, HostListener } from '@angular/core';
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
  bgColor;

  mouseOver() {
    this.bgColor = '#F5F5F5';
  }

  mouseOut() {
    this.bgColor = '';
  }

  constructor() { }

}
