/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { CampeonatoService } from './campeonato.service';

describe('Service: Campeonato', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampeonatoService]
    });
  });

  it('should ...', inject([CampeonatoService], (service: CampeonatoService) => {
    expect(service).toBeTruthy();
  }));
});
