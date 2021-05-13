import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { HoldingService } from './shared/services/holding.service';
import { TableService } from './shared/services/table.service';

describe('AppComponent', () => {
  let component: AppComponent;
  beforeEach(async () => {
    component = new AppComponent(
      {
        getHoldings: jest.fn().mockReturnValue(of([])),
        holdings$: of([]),
      } as HoldingService,
      {} as TableService
    );
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
