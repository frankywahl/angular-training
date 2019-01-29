import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {LicensePlate} from '../license-plate';
import { PopupWindowComponent } from 'app/popup-window/popup-window.component';

@Component({
  selector: 'app-license-plate',
  templateUrl: './license-plate.component.html',
  styleUrls: ['./license-plate.component.css']
})
export class LicensePlateComponent {
  @Input()
  plate: LicensePlate;

  @Input()
  buttonText: string;

  constructor() { }
}
