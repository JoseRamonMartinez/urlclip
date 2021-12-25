import { TestBed } from '@angular/core/testing';

import { CardsLocalStorageService } from './cardslocalstorage.service';

describe('UrlsSavedService', () => {
  let service: CardsLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
