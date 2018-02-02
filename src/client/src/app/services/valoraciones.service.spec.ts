import { TestBed, inject } from '@angular/core/testing';

import { ValoracionesService } from './valoraciones.service';

describe('ValoracionesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValoracionesService]
    });
  });

  it('should be created', inject([ValoracionesService], (service: ValoracionesService) => {
    expect(service).toBeTruthy();
  }));
});
