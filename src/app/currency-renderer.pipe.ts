import { Currency } from './currency-switcher/currency';
import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe, DecimalPipe } from '@angular/common';

@Pipe({
  name: 'currencyRenderer'
})
export class CurrencyRendererPipe implements PipeTransform {
  transform(value: number, currency: Currency): string {
    const cp = new CurrencyPipe('en-US');
    value = value * currency.rate;
    if (currency.code === 'EUR') {
      // Alternative
      // return new DecimalPipe('en-US').transform(value * exchangeRate, '1.0-2') + '€';
      return cp.transform(value, currency.code, '', '1.1-02') + '€';
    } else {
      return cp.transform(value, currency.code, 'symbol', '1.1-02');
    }
  }
}
