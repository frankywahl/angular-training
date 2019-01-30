export type CurrencyCode = 'USD' | 'GBP' | 'EUR';
export interface Currency {
  code: CurrencyCode,
  rate: number,
};
