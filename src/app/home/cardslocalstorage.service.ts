import { Injectable } from '@angular/core';
import { URLCard } from './cards.model';

@Injectable({
  providedIn: 'root',
})
export class CardsLocalStorageService {
  constructor() {}

  saveCard(card: URLCard) {
    localStorage.setItem(`card_${card.short_url}`, JSON.stringify(card));
  }

  getCards() {
    let localstorage = { ...localStorage };
    let cards: URLCard[] = [];

    for (let card in localstorage) {
      if (/card/gi.test(card)) {
        cards.push(JSON.parse(localstorage[card]));
      }
    }
    return cards.sort((a, b) => (a.created_at < b.created_at ? 1 : -1));
  }

  removeCard(card: URLCard) {
    localStorage.removeItem(`card_${card.short_url}`);
  }
}
