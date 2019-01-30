import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LicensePlate } from './../license-plate';
import { LicensePlateService } from './../license-plate.service';

@Component({
  selector: 'app-store-view',
  templateUrl: './store-view.component.html',
  styleUrls: ['./store-view.component.css']
})
export class StoreViewComponent implements OnInit {

  licensePlates$: Observable<LicensePlate[]>;
  showPopup = false;

  constructor(lp: LicensePlateService, private cartService: CartService) {
    this.licensePlates$ = lp.getList();
  }

  ngOnInit() {
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
