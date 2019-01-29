import { LicensePlateService } from './license-plate.service';
import { Component } from '@angular/core';
import {LicensePlate} from './license-plate';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .background {
      background-color: #F5F5F5;
    }
  `]
})
export class AppComponent {
  now = new Date();
  licensePlates$: Observable<LicensePlate[]>;

  constructor(lp: LicensePlateService) {
    this.licensePlates$ = lp.getList();
  }
}
