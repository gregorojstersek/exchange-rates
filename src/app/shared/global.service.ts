import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  getIsoStringDateNow = () => {
    return new Date().toISOString().slice(0, 10);
  }
}
