import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateRate'
})
export class CalculateRatePipe implements PipeTransform {

  transform(rate: number, arg: string) {
    const action = arg;
    if (action === 'buy') {
      return (rate - (0.05 * rate)).toFixed(4);
    } else if (action === 'sell') {
      return (rate + (0.05 * rate)).toFixed(4);
    }
  }

}
