import { LicensePlateService } from './license-plate.service';
import { Component } from '@angular/core';
import {LicensePlate} from './license-plate';

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
  licensePlates: LicensePlate[];

  constructor(lp: LicensePlateService) {
    lp.getList()
      .subscribe((plates) => this.licensePlates = plates);
  }
}
