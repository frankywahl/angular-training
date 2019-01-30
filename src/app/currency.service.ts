import { Currency } from './currency-switcher/currency';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  current: Currency = {code: 'USD', rate: 1.0};
  constructor() { }
}
