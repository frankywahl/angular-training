import { Currency, CurrencyCode } from './currency-switcher/currency';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private current: Currency = {code: 'USD', rate: 1.0};
  private rates: any = { 'USD': 1.0 };

  constructor(http: HttpClient) {
    http.get("http://localhost:8000/rates").subscribe((rates) => {
      this.rates = {...this.rates, ...rates};
    });
  }

  setCurrent(currencyCode: CurrencyCode) {
    this.current = {
      rate: this.rates[currencyCode] || 1.0,
      code: currencyCode
    };
  }

  getCurrent(): Currency {
    return this.current;
  }
}
