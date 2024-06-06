import { TestBed } from '@angular/core/testing';

import { HistoriqueClientService } from './historique-client.service';

describe('HistoriqueClientService', () => {
  let service: HistoriqueClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoriqueClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
