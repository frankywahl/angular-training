import { LicensePlateService } from './license-plate.service';
import { Component } from '@angular/core';
import {LicensePlate} from './license-plate';
import { Observable } from 'rxjs';
import { CartService } from './cart.service';

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
  showPopup = false;

  constructor(lp: LicensePlateService, private cartService: CartService) {
    this.licensePlates$ = lp.getList();
  }

  addToCart(plate: LicensePlate) {
    this.cartService.addToCart(plate)
      .subscribe((_e) => this.showPopup = true);
  }

  handleClosePopup(event) {
    console.log(event);
    this.showPopup = false;
  }
}
