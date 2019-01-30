import { CurrencyService } from './../currency.service';
import { Component } from '@angular/core';
import { Currency, CurrencyCode } from './currency';

@Component({
  selector: 'app-currency-switcher',
  templateUrl: './currency-switcher.component.html',
  styleUrls: ['./currency-switcher.component.css']
})
export class CurrencySwitcherComponent {

  showItems = false;

  constructor(public currencyService: CurrencyService) { }

  changeCurrency(currency: CurrencyCode) {
    let rate = 1.0;
    if (currency === 'EUR') {
      rate = 1.7;
    } else if (currency === 'GBP') {
      rate = 1.2;
    }

    this.currencyService.current = {
      code: currency,
      rate: rate,
    };
    this.showItems = false;
  }
}
