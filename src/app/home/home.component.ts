import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { finalize } from 'rxjs/operators';
import { ShortenerService } from './shortener.service';
import { URLCard } from './cards.model';
import { CardsLocalStorageService } from './cardslocalstorage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;
  inputURL: any = '';
  URLCards: URLCard[] = [];
  URLCardsCopy: URLCard[] = [];
  sortButton: boolean = true;

  constructor(
    private shortenerService: ShortenerService,
    private cardslocalstorageService: CardsLocalStorageService,
    public toastController: ToastController,
    private translateService: TranslateService
  ) {}

  ngOnInit() {
    this.URLCards = this.cardslocalstorageService.getCards();
    Object.assign(this.URLCardsCopy, this.URLCards);
  }

  shortURL(url: string) {
    this.isLoading = true;
    try {
      this.shortenerService.postURL(url).subscribe((result: any) => {
        this.isLoading = false;
        let card: URLCard = {
          hostname: result.url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/)[1],
          long_url: result.url,
          short_url: environment.serverUrl + '/' + result.code,
          created_at: result.created_at,
        };
        this.URLCards.push(card);
        this.URLCardsCopy.push(card);
        this.toastSuccess();
        this.cardslocalstorageService.saveCard(card);
        this.inputURL = '';
      });
    } finally {
      this.isLoading = false;
      this.toastFails();
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

  filterCards(event: any) {
    this.URLCards = this.URLCardsCopy;
    const searchTerm: string = event.detail.value;
    this.URLCards = this.URLCards.filter((cards) => {
      return cards.hostname.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  toastSuccess() {
    this.toastController
      .create({
        message: 'URL shorted 👍',
        duration: 1800,
      })
      .then((toastRes) => {
        toastRes.present();
      });
  }

  toastFails() {
    this.toastController
      .create({
        message: 'Something fails 👉👈',
        duration: 1800,
      })
      .then((toastRes) => {
        toastRes.present();
      });
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
