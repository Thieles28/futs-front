import { TestBed } from '@angular/core/testing';

import { ClassificacaoService } from './classificacao.service';

describe('ClassificacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClassificacaoService = TestBed.get(ClassificacaoService);
    expect(service).toBeTruthy();
  });
});
