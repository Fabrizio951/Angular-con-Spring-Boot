import { TestBed } from '@angular/core/testing';

import { SerusuarioService } from './serusuario.service';

describe('SerusuarioService', () => {
  let service: SerusuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerusuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
