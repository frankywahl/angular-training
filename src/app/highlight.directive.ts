import { Directive, HostBinding, HostListener } from '@angular/core';
import { MockNgModuleResolver } from '@angular/compiler/testing';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor')
  bgColor = '';

  @HostListener('mouseover')
  mouseOver() {
    this.bgColor = '#F5F5F5';
  }

  @HostListener('mouseout')
  mouseOut() {
    this.bgColor = '';
  }

  constructor() { }

}
