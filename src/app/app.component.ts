import { LicensePlateService } from './license-plate.service';
import { Component, OnDestroy } from '@angular/core';
import {LicensePlate} from './license-plate';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .background {
      background-color: #F5F5F5;
    }
  `]
})
export class AppComponent implements OnDestroy {
  now = new Date();
  licensePlates: LicensePlate[];

  private lpSubscription: Subscription;

  constructor(lp: LicensePlateService) {
    this.lpSubscription = lp.getList().subscribe(
      (plates) => this.licensePlates = plates,
      (error) => console.log('Error', error),
      () => console.log('Done')
    );
  }

  ngOnDestroy() {
    this.lpSubscription.unsubscribe();
  }
}
