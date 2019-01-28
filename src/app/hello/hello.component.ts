import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <div>
      <h2>Hello {{name}}</h2>
    </div>
  `
})
export class HelloComponent {

  @Input() name: string;

  constructor() {
    this.name = 'Default Name';
  }

}
