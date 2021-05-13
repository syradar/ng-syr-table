import { ChangeDetectionStrategy, Component } from '@angular/core';
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
  table?: Table<HoldingColumns>;

  constructor(
    private holdingService: HoldingService,
    private tableService: TableService
  ) {
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
        this.table = this.tableService.getTable(hs);
      },
    });

    console.log(this.table);
  }

  hidePerformance($event: unknown) {
    console.log($event);
    if (this.table) {
      this.table = this.tableService.removeColumn(this.table, HoldingColumns.Performance);
    }
  }
}
