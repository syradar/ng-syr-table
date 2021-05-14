(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/ng-syr-table/ng-syr-table/src/main.ts */"zUnb");


/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "AmE5":
/*!****************************************************!*\
  !*** ./src/app/shared/services/holding.service.ts ***!
  \****************************************************/
/*! exports provided: HoldingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoldingService", function() { return HoldingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let HoldingService = class HoldingService {
    constructor() {
        this.holdings$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([
            {
                name: 'SEB A',
                performance: 1.21233,
                marketValue: 123132,
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
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
    }
    getHoldings() {
        return this.holdings$;
    }
};
HoldingService.ctorParameters = () => [];
HoldingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], HoldingService);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
};


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_services_holding_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/services/holding.service */ "AmE5");
/* harmony import */ var _shared_services_table_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/table.service */ "mLsC");








let AppComponent = class AppComponent {
    constructor(holdingService, tableService) {
        this.holdingService = holdingService;
        this.tableService = tableService;
        this.title = 'syr-table';
        // Data that we get from Table Service
        this.tableData$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"]();
        // Action Stream from the button
        this.columnFilter$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"](1);
        // Combine data and action like something from Redux
        this.tableToDisplay$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([
            this.tableData$,
            this.columnFilter$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(undefined)),
        ]).pipe(
        // scan is like reduce, so here we toggle the filter
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["scan"])((old, newFilter) => old[1] === newFilter[1] ? [newFilter[0], undefined] : newFilter), 
        // Filter out the data from the table
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([data, columnFilter]) => {
            return Object.assign(Object.assign({}, data), { header: Object.assign(Object.assign({}, data.header), { headers: data.header.headers.filter((h) => h.column !== columnFilter) }), rows: data.rows.map((row) => ({
                    cells: row.cells.filter((cell) => cell.column !== columnFilter),
                })) });
        }));
        // Get holding data
        this.holdingService.getHoldings().subscribe({
            next: (holdings) => {
                const hs = holdings.map((h) => ({
                    cells: [
                        {
                            column: _shared_services_table_service__WEBPACK_IMPORTED_MODULE_7__["HoldingColumns"].Name,
                            value: h.name,
                        },
                        {
                            column: _shared_services_table_service__WEBPACK_IMPORTED_MODULE_7__["HoldingColumns"].Performance,
                            value: h.performance,
                        },
                        {
                            column: _shared_services_table_service__WEBPACK_IMPORTED_MODULE_7__["HoldingColumns"].MarketValue,
                            value: h.marketValue,
                        },
                    ],
                }));
                // Create a table from holding data and emit
                this.tableData$.next(this.tableService.getTable(hs));
            },
        });
    }
    hidePerformance(_) {
        // Emit filter action
        this.columnFilter$.next(_shared_services_table_service__WEBPACK_IMPORTED_MODULE_7__["HoldingColumns"].Performance);
    }
};
AppComponent.ctorParameters = () => [
    { type: _shared_services_holding_service__WEBPACK_IMPORTED_MODULE_6__["HoldingService"] },
    { type: _shared_services_table_service__WEBPACK_IMPORTED_MODULE_7__["TableService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mx-auto mt-16\">\n  <div class=\"bg-white shadow p-4\">\n    <h2 class=\"text-xl font-semibold mb-4\">Mina innehav</h2>\n\n    <button class=\"py-2 px-4 bg-gray-300 hover:bg-blue-500 hover:text-white rounded-full\"\n            (click)=\"hidePerformance($event)\">Toggle\n      Performance</button>\n\n    <table class=\"block lg:table table-auto mt-8 w-full\" *ngIf=\"tableToDisplay$ | async as table\">\n      <thead class=\"hidden lg:table-header-group\">\n        <tr>\n          <th *ngFor=\"let header of table.header.headers\" [ngClass]=\"{'text-right': header.column !== 0}\"\n              class=\"text-left p-1 border-b border-gray-500\">\n            {{header.label}}\n          </th>\n        </tr>\n      </thead>\n      <tbody class=\"w-full block lg:table-row-group\">\n        <tr *ngFor=\"let row of table.rows\"\n            class=\"flex flex-wrap border-b lg:border-none py-2 lg:py-0 justify-between lg:table-row w-full\">\n          <td *ngFor=\"let cell of row.cells\"\n              [ngClass]=\"{'text-right': cell.column !== 0, 'font-bold lg:font-normal w-full': cell.column === 0}\"\n              class=\"p-1 lg:border-b border-gray-200 block lg:table-cell\">\n            <div class=\"block lg:hidden text-sm\" [ngClass]=\"{ 'hidden': cell.column === 0}\">\n              {{cell.lable}}\n            </div>\n            <div class=\"block lg:inline\">\n              {{cell.value}}\n            </div>\n          </td>\n        </tr>\n      </tbody>\n      <!-- <tfoot>\n    <tr>\n      <td>sum</td>\n      <td></td>\n      <td>123 SEK</td>\n    </tr>\n  </tfoot> -->\n    </table>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_locales_sv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/locales/sv */ "RpMq");
/* harmony import */ var _angular_common_locales_sv__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_sv__WEBPACK_IMPORTED_MODULE_6__);







Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_sv__WEBPACK_IMPORTED_MODULE_6___default.a);
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]],
        providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"], useValue: 'fr-FR' }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "mLsC":
/*!**************************************************!*\
  !*** ./src/app/shared/services/table.service.ts ***!
  \**************************************************/
/*! exports provided: TableService, HoldingColumns, holdingColumnName, holdingCellFormatter, createTableCell, createHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableService", function() { return TableService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoldingColumns", function() { return HoldingColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "holdingColumnName", function() { return holdingColumnName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "holdingCellFormatter", function() { return holdingCellFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTableCell", function() { return createTableCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHeaders", function() { return createHeaders; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let TableService = class TableService {
    constructor() { }
    getTable(rows) {
        const mappedRows = rows.map((row) => ({
            cells: row.cells.map((c) => createTableCell(holdingColumnName)(c.column, holdingCellFormatter(c.column, c.value))),
        }));
        const table = {
            header: createHeaders(mappedRows[0], holdingColumnName),
            sort: false,
            rows: mappedRows,
        };
        return table;
    }
};
TableService.ctorParameters = () => [];
TableService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], TableService);

var HoldingColumns;
(function (HoldingColumns) {
    HoldingColumns[HoldingColumns["Name"] = 0] = "Name";
    HoldingColumns[HoldingColumns["Performance"] = 1] = "Performance";
    HoldingColumns[HoldingColumns["MarketValue"] = 2] = "MarketValue";
})(HoldingColumns || (HoldingColumns = {}));
const holdingColumnName = (hc) => {
    switch (hc) {
        case HoldingColumns.Name:
            return 'Name';
        case HoldingColumns.Performance:
            return 'Performance';
        case HoldingColumns.MarketValue:
            return 'MarketValue';
    }
};
const holdingCellFormatter = (hc, value) => {
    switch (hc) {
        case HoldingColumns.Name:
            return value.toString();
        case HoldingColumns.Performance:
            return typeof value === 'number' ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatPercent"])(value, 'sv', '1.2-2') : value;
        case HoldingColumns.MarketValue:
            return typeof value === 'number'
                ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatCurrency"])(value, 'sv', '', 'SEK', '1.2-2')
                : value;
    }
};
const createTableCell = (labelFunction) => (column, value) => ({
    column,
    lable: labelFunction(column),
    value,
    enabled: true,
});
const createHeaders = (row, labelFunction) => {
    return {
        headers: row.cells.map((c) => ({
            column: c.column,
            sort: false,
            label: labelFunction(c.column),
            enabled: true,
        })),
    };
};


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.cfdc93de146fe33c10af.js.map