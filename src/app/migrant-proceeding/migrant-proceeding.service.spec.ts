import { TestBed } from '@angular/core/testing';
import {MigrantProceedingService} from './migrant-proceeding.service';

describe('MigrantProceedingService', () => {
  let service: MigrantProceedingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MigrantProceedingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
