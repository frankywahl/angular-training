import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LicensePlate} from '../license-plate';

@Component({
  selector: 'app-license-plate',
  templateUrl: './license-plate.component.html',
  styleUrls: ['./license-plate.component.css']
})
export class LicensePlateComponent {
  showPopup = false;

  @Input()
  plate: LicensePlate;

  @Input()
  buttonText: string;

  constructor() { }

  buttonClicked() {
    this.showPopup = true;
  }

  handleClosePopup(event) {
    this.showPopup = false;
    console.log(event);
  }
}
