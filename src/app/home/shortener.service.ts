import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ShortenerService {
  httpOptions = {
    headers: new HttpHeaders({}),
  };

  constructor(private httpClient: HttpClient) {}

  private route = '/';

  postURL(param_url: string): Observable<string> {
    const body = JSON.stringify({
      url: param_url,
    });
    return this.httpClient.post<any>(this.route, body, this.httpOptions);
  }
}
