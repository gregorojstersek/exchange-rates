import { Injectable } from '@angular/core';
import { Response, Headers, Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ExchangeRate } from './exchange-rate.model';

@Injectable({
  providedIn: 'root',
})
export class ExchangeRatesService {

  private exchangeRatesData = new Subject<Array<ExchangeRate>>();
  private exchangeRatesDataError = new Subject<Response>();

  constructor(private http: Http) { }

  getExchangeRates = (urlParams: Object = {}) => {
    return this.http.get('https://api.exchangeratesapi.io/latest', { params: urlParams })
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
          // show the error message
          this.exchangeRatesDataError.next(error);
        });
  }

  getExchangeRatesData = () => {
    return this.exchangeRatesData;
  }

  getExchangeRatesDataError = () => {
    return this.exchangeRatesDataError;
  }
}

