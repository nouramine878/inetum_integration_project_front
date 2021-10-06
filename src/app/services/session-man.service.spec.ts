import { TestBed } from '@angular/core/testing';

import { SessionManService } from './session-man.service';

describe('SessionManService', () => {
  let service: SessionManService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionManService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
