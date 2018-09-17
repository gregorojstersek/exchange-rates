import { Component, OnInit } from '@angular/core';

import { ExchangeRate } from '../shared/exchange-rate.model';
import { CURRENCIES } from './../../shared/mock-currencies';
import { ExchangeRatesService } from '../shared/exchange-rates.service';

@Component({
  selector: 'app-exchange-rates-display',
  templateUrl: './exchange-rates-display.component.html'
})
export class ExchangeRatesDisplayComponent implements OnInit {

  exchangeRates: Array<ExchangeRate>;
  currencies = CURRENCIES;
  currencySort = 'asc';

  constructor(private exchangeRatesService: ExchangeRatesService) { }

  ngOnInit() {
    this.exchangeRatesService.getExchangeRates();

    this.exchangeRatesService.getExchangeRatesData().subscribe((data: Array<ExchangeRate>) => {
      this.exchangeRates = this.sortExchangeRates(data);
    });
  }

  calculateBuyRate = (rate: number) => {
    return (rate - (0.05 * rate)).toFixed(4);
  }

  calculateSellRate = (rate: number) => {
    return (rate + (0.05 * rate)).toFixed(4);
  }

  canBeSelectedAsBase = (currentCurrency: string) => {
    const found = this.currencies.filter((currency) => currency === currentCurrency);
    return found.length;
  }

  sortByCurrency = () => {
    this.currencySort = this.currencySort === 'asc' ? 'desc' : 'asc';
    this.exchangeRates.reverse();
  }

  sortExchangeRates = (data: Array<ExchangeRate>) => {
    return data.sort((a, b) => {
      const x = a.currency;
      const y = b.currency;

      if (this.currencySort === 'asc') {
        if (x < y) { return -1; }
        if (x > y) { return 1; }
      } else if (this.currencySort === 'desc') {
        if (x < y) { return 1; }
        if (x > y) { return -1; }
      }

      return 0;
    });
  }

}
