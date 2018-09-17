import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ExchangeRatesComponent } from './exchange-rates/exchange-rates.component';
import { ExchangeRatesSettingsComponent } from './exchange-rates/exchange-rates-settings/exchange-rates-settings.component';
import { ExchangeRatesDisplayComponent } from './exchange-rates/exchange-rates-display/exchange-rates-display.component';
import { CalculateRatePipe } from './shared/calculate-rate.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ExchangeRatesComponent,
    ExchangeRatesSettingsComponent,
    ExchangeRatesDisplayComponent,
    CalculateRatePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [CalculateRatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
