import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe, DecimalPipe } from '@angular/common';

// This would usually exist in a different file
export type Currency = 'USD' | 'EUR' | 'GBP';

@Pipe({
  name: 'currencyRenderer'
})
export class CurrencyRendererPipe implements PipeTransform {
  transform(value: number, currencyCode: Currency = 'USD', exchangeRate: number = 1.0): string {
    const cp = new CurrencyPipe('en-US');
    value = value * exchangeRate;
    if (currencyCode === 'EUR') {
      // Alternative
      // return new DecimalPipe('en-US').transform(value * exchangeRate, '1.0-2') + '€';
      return cp.transform(value, currencyCode, '', '1.1-02') + '€';
    } else {
      return cp.transform(value, currencyCode, 'symbol', '1.1-02');
    }
  }
}
