import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { ToastController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { ShortenerService } from './shortener.service';

interface URLCard {
  hostname: string;
  long_url: string;
  short_url: string;
  created_at: number;
}

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

  constructor(private shortenerService: ShortenerService, public toastController: ToastController) {}

  ngOnInit() {}

  shortURL(url: string) {
    this.isLoading = true;
    try {
      this.shortenerService.postURL(url).subscribe((result: any) => {
        this.isLoading = false;
        this.URLCards.push({
          hostname: result.url.match(
            /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/
          )[3],
          long_url: result.url,
          short_url: environment.serverUrl + '/' + result.code,
          created_at: result.created_at,
        });
        this.toastSuccess();
        this.inputURL = '';
      });
    } finally {
      this.isLoading = false;
      this.toastFails();
    }
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
