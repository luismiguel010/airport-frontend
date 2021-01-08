import { TestBed } from '@angular/core/testing';

import { MeteorologyService } from './meteorology.service';

describe('MeteorologyService', () => {
  let service: MeteorologyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeteorologyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
