import { TestBed } from '@angular/core/testing';

import { OESservicesService } from './oesservices.service';

describe('OESservicesService', () => {
  let service: OESservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OESservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
