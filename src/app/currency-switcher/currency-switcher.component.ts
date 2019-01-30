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
    this.currencyService.setCurrent(currency);
    this.showItems = false;
  }
}
