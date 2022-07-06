import { TestBed } from '@angular/core/testing';

import { LegalAssistanceService } from './legal-assistance.service';

describe('LegalAssistanceService', () => {
  let service: LegalAssistanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegalAssistanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
