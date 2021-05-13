import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest, Observable, ReplaySubject } from 'rxjs';
import { map, scan, shareReplay, startWith } from 'rxjs/operators';
import { HoldingService } from './shared/services/holding.service';
import { HoldingColumns, Table, TableService } from './shared/services/table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'syr-table';
  // Data that we get from Table Service
  tableData$ = new ReplaySubject<Table<HoldingColumns>>();

  // Action Stream from the button
  columnFilter$ = new ReplaySubject<HoldingColumns | undefined>(1);

  // Combine data and action like something from Redux
  tableToDisplay$ = combineLatest([
    this.tableData$,
    this.columnFilter$.pipe(startWith(undefined)),
  ]).pipe(
    // scan is like reduce, so here we toggle the filter
    scan((old, newFilter) =>
      old[1] === newFilter[1] ? [newFilter[0], undefined] : newFilter
    ),
    // Filter out the data from the table
    map(([data, columnFilter]) => {
      return {
        ...data,
        header: {
          ...data.header,
          headers: data.header.headers.filter((h) => h.column !== columnFilter),
        },
        rows: data.rows.map((row) => ({
          cells: row.cells.filter((cell) => cell.column !== columnFilter),
        })),
      };
    })
  );

  constructor(
    private holdingService: HoldingService,
    private tableService: TableService
  ) {
    // Get holding data
    this.holdingService.getHoldings().subscribe({
      next: (holdings) => {
        const hs = holdings.map((h) => ({
          cells: [
            {
              column: HoldingColumns.Name,
              value: h.name,
            },
            {
              column: HoldingColumns.Performance,
              value: h.performance,
            },
            {
              column: HoldingColumns.MarketValue,
              value: h.marketValue,
            },
          ],
        }));

        // Create a table from holding data and emit
        this.tableData$.next(this.tableService.getTable(hs));
      },
    });
  }

  hidePerformance(_: unknown) {
    // Emit filter action
    this.columnFilter$.next(HoldingColumns.Performance);
  }
}
