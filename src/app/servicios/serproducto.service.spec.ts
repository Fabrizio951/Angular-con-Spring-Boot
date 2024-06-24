import { TestBed } from '@angular/core/testing';

import { SerproductoService } from './serproducto.service';

describe('SerproductoService', () => {
  let service: SerproductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerproductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});
