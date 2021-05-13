import { HoldingService } from './holding.service';

describe('HoldingService', () => {
  let service: HoldingService;

  beforeEach(() => {
    service = new HoldingService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
