import { formatCurrency, formatNumber, formatPercent } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  constructor() {}

  getTable(rows: RawRowData<HoldingColumns>[]): Table<HoldingColumns> {
    const mappedRows: TableRow<HoldingColumns>[] = rows.map((row) => ({
      cells: row.cells.map((c) =>
        createTableCell(holdingColumnName)(
          c.column,
          holdingCellFormatter(c.column, c.value)
        )
      ),
    }));

    const table: Table<HoldingColumns> = {
      header: createHeaders(mappedRows[0], holdingColumnName),
      sort: false,
      rows: mappedRows,
    };

    return table;
  }

  // removeColumn<C>(table: Table<C>, column: C): Table<C> {
  //   const newHeaders = table.header.headers.filter((h) => h.column !== column);
  //   const newRows = table.rows.map((row) => ({
  //     cells: row.cells.filter((cell) => cell.column !== column),
  //   }));

  //   return {
  //     header: {
  //       headers: newHeaders,
  //     },
  //     rows: newRows,
  //     sort: table.sort,
  //   };
  // }
}

export interface RawRowData<C> {
  cells: RawCellData<C>[];
}

export interface RawCellData<C> {
  column: C;
  value: string | number;
}

export interface TableCell<C> {
  column: C;
  value: string;
  lable: string;
  enabled: boolean;
}

export interface TableRow<C> {
  cells: TableCell<C>[];
}

export interface TableHeaderRow<C> {
  headers: TableHeader<C>[];
}

export interface TableHeader<C> {
  column: C;
  label: string;
  sort: boolean;
  enabled: boolean;
}

export interface Table<C> {
  header: TableHeaderRow<C>;
  rows: TableRow<C>[];
  sort: boolean;
}

export enum HoldingColumns {
  Name,
  Performance,
  MarketValue,
}

export const holdingColumnName = (hc: HoldingColumns): string => {
  switch (hc) {
    case HoldingColumns.Name:
      return 'Name';
    case HoldingColumns.Performance:
      return 'Performance';
    case HoldingColumns.MarketValue:
      return 'MarketValue';
  }
};

export const holdingCellFormatter = (
  hc: HoldingColumns,
  value: string | number
): string => {
  switch (hc) {
    case HoldingColumns.Name:
      return value.toString();
    case HoldingColumns.Performance:
      return typeof value === 'number' ? formatPercent(value, 'sv', '1.2-2') : value;
    case HoldingColumns.MarketValue:
      return typeof value === 'number'
        ? formatCurrency(value, 'sv', '', 'SEK', '1.2-2')
        : value;
  }
};

export const createTableCell =
  <C>(labelFunction: (column: C) => string) =>
  (column: C, value: string): TableCell<C> => ({
    column,
    lable: labelFunction(column),
    value,
    enabled: true,
  });

export const createHeaders = <C>(
  row: TableRow<C>,
  labelFunction: (column: C) => string
): TableHeaderRow<C> => {
  return {
    headers: row.cells.map((c) => ({
      column: c.column,
      sort: false,
      label: labelFunction(c.column),
      enabled: true,
    })),
  };
};
