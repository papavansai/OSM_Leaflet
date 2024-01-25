import { TestBed } from '@angular/core/testing';

import { OSMLeafletService } from './osmleaflet.service';

describe('OSMLeafletService', () => {
  let service: OSMLeafletService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OSMLeafletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
