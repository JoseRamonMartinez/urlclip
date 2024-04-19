import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const routes = {
  post: () => `/`,
};

@Injectable({
  providedIn: 'root',
})
export class ShortenerService {
  constructor(private httpClient: HttpClient) {}

  saveURL(param_url: string): Observable<JSON> {
    const body = JSON.stringify({
      url: param_url,
    });
    return this.httpClient.post(routes.post(), body).pipe(map((body: any) => body));
  }
}
