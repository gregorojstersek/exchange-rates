import { GlobalService } from './../../shared/global.service';
import { Component, OnInit } from '@angular/core';

import { ExchangeRateSettings } from './shared/exchange-rate-settings.model';
import { CURRENCIES } from './../../shared/mock-currencies';
import { ExchangeRatesService } from '../shared/exchange-rates.service';


@Component({
  selector: 'app-exchange-rates-settings',
  templateUrl: './exchange-rates-settings.component.html'
})
export class ExchangeRatesSettingsComponent implements OnInit {

  exchangeRateSettings = new ExchangeRateSettings('EUR', this.globalService.getIsoStringDateNow());
  currencies = CURRENCIES;

  constructor(private exchangeRatesService: ExchangeRatesService, private globalService: GlobalService) { }

  ngOnInit() {
  }

  submitSettings = () => {
    this.exchangeRatesService.getExchangeRates(this.exchangeRateSettings);
  }

  canSubmitSettings = () => {
    return this.exchangeRateSettings.base && this.exchangeRateSettings.date;
  }

}
