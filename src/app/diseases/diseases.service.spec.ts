import { TestBed } from '@angular/core/testing';

import { DiseasesService } from './diseases.service';

describe('DiseaseService', () => {
  let service: DiseasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiseasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
