import { TestBed } from '@angular/core/testing';

import { ImdbserviceService } from './imdbservice.service';

describe('ImdbserviceService', () => {
  let service: ImdbserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImdbserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
