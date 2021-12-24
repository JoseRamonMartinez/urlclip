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
    expect(URLCard.hostname).toBeInstanceOf(String);
    expect(URLCard.long_url).toBeInstanceOf(String);
    expect(URLCard.short_url).toBeInstanceOf(String);
    expect(URLCard.created_at).toBeInstanceOf(Number);
  });
});
