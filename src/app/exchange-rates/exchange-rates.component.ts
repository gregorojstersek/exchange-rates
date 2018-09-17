import { Component, OnInit } from '@angular/core';
import { ExchangeRatesService } from './shared/exchange-rates.service';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  providers: [ExchangeRatesService]
})
export class ExchangeRatesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
