import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { finalize } from 'rxjs/operators';
import { ShortenerService } from './shortener.service';

interface URLCard {
  long_url: string;
  short_url: string;
  created_at: string;
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

  constructor(private shortenerService: ShortenerService) {}

  ngOnInit() {
    this.isLoading = false;
    /*this.quoteService
      .getRandomQuote({ category: 'dev' })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((quote: string) => {
        this.quote = quote;
      });*/
  }

  shortURL(url: string) {
    this.shortenerService.postURL(url).subscribe((result: any) => {
      console.log(result);
      this.URLCards.push({
        long_url: result.url,
        short_url: environment.serverUrl + '/' + result.code,
        created_at: new Date(result.created_at).toUTCString(),
      });
      console.log(this.URLCards);
    });
  }
}
