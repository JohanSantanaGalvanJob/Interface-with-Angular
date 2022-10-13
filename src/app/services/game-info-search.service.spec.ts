import { TestBed } from '@angular/core/testing';

import { GameInfoSearchService } from './game-info-search.service';

describe('GameInfoSearchService', () => {
  let service: GameInfoSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameInfoSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
