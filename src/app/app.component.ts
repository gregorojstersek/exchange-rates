import { ExchangeRatesService } from './exchange-rates/shared/exchange-rates.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  exchangeRateDataError: boolean;

  constructor(private exchangeRatesService: ExchangeRatesService) { }

  ngOnInit() {
    this.exchangeRatesService.getExchangeRatesDataError().subscribe(() => {
      this.exchangeRateDataError = true;
    });

  }

}
