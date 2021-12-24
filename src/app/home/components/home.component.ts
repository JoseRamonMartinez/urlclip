import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ShortenerService } from '../services/shortener.service';
import { URLCard } from '../models/cards.model';
import { CardsLocalStorageService } from '../services/cardslocalstorage.service';
import { ToastService } from '@app/@shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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
    private translateService: TranslateService
  ) {
    this.URLCards = this.cardslocalstorageService.getCards();
  }

  ngOnInit() {}

  shortURL(url: string) {
    this.isLoading = true;
    try {
      this.shortenerService.saveURL(url).subscribe((result: any) => {
        this.isLoading = false;
        let card: URLCard = {
          hostname: result.url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/)[1],
          long_url: result.url,
          short_url: environment.serverUrl + '/' + result.code,
          created_at: result.created_at,
        };
        this.URLCards.push(card);
        this.cardslocalstorageService.saveCard(card);
        this.inputURL = '';
        this.toastService.presentToast('URL shorted 👍');
      });
    } finally {
      this.isLoading = false;
      this.toastService.presentToast('Something fails 👉👈');
    }
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
