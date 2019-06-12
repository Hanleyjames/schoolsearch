import { TestBed } from '@angular/core/testing';

import { SearchdropdownService } from './searchdropdown.service';

describe('SearchdropdownService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchdropdownService = TestBed.get(SearchdropdownService);
    expect(service).toBeTruthy();
  });
});
