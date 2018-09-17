import { Injectable } from '@angular/core';
import { Response, Headers, Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ExchangeRate } from './exchange-rate.model';

@Injectable({
  providedIn: 'root',
})
export class ExchangeRatesService {

  private headers = new Headers({
    'Content-Type': 'application/json'
  });

  private exchangeRatesData = new Subject<Array<ExchangeRate>>();

  constructor(private http: Http) { }

  getExchangeRatesData = () => {
    return this.exchangeRatesData;
  }

  getExchangeRates = (urlParams: Object = {}) => {
    return this.http.get('https://api.exchangeratesapi.io/latest', { params: urlParams, headers: this.headers })
      .pipe(map((res: Response) => res.json()))
      .subscribe((exchangeRates) => {

        // transform from object with key value pair, to an array of objects
        const exchangeRatesData = Object.keys(exchangeRates.rates).map((key) => {
          return {
            currency: key,
            rate: exchangeRates.rates[key]
          };
        });

        // attach the structured data
        this.exchangeRatesData.next(exchangeRatesData);
      },
        (error: Response) => {
          console.log(error);
          // to do error handling
        });
  }
}

