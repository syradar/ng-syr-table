import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HoldingService {
  holdings$: Observable<Holding[]> = of([
    {
      name: 'SEB A',
      performance: 1.21233,
      marketValue: 123_132,
    },
    {
      name: 'Investor B',
      performance: 0.231231,
      marketValue: 25900,
    },
    {
      name: 'JM',
      performance: 0.4585,
      marketValue: 5938,
    },
  ]).pipe(shareReplay());

  constructor() {}

  getHoldings(): Observable<Holding[]> {
    return this.holdings$;
  }
}

interface Holding {
  name: string;
  performance: number;
  marketValue: number;
}
