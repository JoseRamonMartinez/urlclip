import { TestBed } from '@angular/core/testing';

import { URLCard } from './cards.model';

describe('CardsModels', () => {
  it('should have corerct types', () => {
    let URLCard: URLCard = {
      hostname: 'google.com',
      long_url: 'https://google.com',
      short_url: 'https://urlclip.herokuapp.com/UKGY6_png',
      created_at: 1638269349,
    };
    expect(typeof URLCard.hostname).toBe("string");
    expect(typeof URLCard.long_url).toBe("string");
    expect(typeof URLCard.short_url).toBe("string");
    expect(typeof URLCard.created_at).toBe("number");
  });
});
