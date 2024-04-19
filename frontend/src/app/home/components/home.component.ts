import { Component } from '@angular/core';
import { environment } from '@env/environment';
import { URLCard } from '../models/cards.model';
import { CardsLocalStorageService } from '../services/cardslocalstorage.service';
import { ShortenerService } from '../services/shortener.service';
import { ToastService } from '@shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  quote: string | undefined;
  isLoading = false;
  URLCards: URLCard[] = [];
  inputURL: string = '';
  searchCard: string = '';

  sortButton: boolean = true;

  constructor(
    private shortenerService: ShortenerService,
    private cardslocalstorageService: CardsLocalStorageService,
    private toastService: ToastService,
  ) {
    this.URLCards = this.cardslocalstorageService.getCards();
  }

  shortURL(url: string) {
    this.isLoading = true;
    this.shortenerService.saveURL(url).subscribe({
      next: (result: any) => {
        this.isLoading = false;
        let card: URLCard = {
          hostname: result.url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/)[1],
          long_url: result.url,
          short_url: environment.serverUrl + '/' + result.code,
          created_at: result.created_at,
        };
        this.URLCards.unshift(card);
        this.cardslocalstorageService.saveCard(card);
        this.inputURL = '';
        this.toastService.presentToast('URL shorted successfully! 🎉');
      },
      error: () => {
        this.isLoading = false;
        this.toastService.presentToast('👉👈 Something went wrong. Please, try again in a few seconds ');
      },
    });
  }

  deleteCard(card: URLCard) {
    this.URLCards.forEach((element, index) => {
      if (element == card) this.URLCards.splice(index, 1);
    });
    this.cardslocalstorageService.removeCard(card);
  }

  sortCards() {
    this.URLCards = this.URLCards.reverse();
    this.sortButton = !this.sortButton;
  }

  copyURL(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
