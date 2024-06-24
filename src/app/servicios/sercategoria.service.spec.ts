import { TestBed } from '@angular/core/testing';

import { SercategoriaService } from './sercategoria.service';

describe('SercategoriaService', () => {
  let service: SercategoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SercategoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
