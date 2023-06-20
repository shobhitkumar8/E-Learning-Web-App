import { TestBed } from '@angular/core/testing';

import { ChangeBgDirectiveService } from './change-bg.directive.service';

describe('ChangeBgDirectiveService', () => {
  let service: ChangeBgDirectiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeBgDirectiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
