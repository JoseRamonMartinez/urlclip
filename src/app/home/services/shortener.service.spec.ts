import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ShortenerService } from './shortener.service';

describe('ShortenerService', () => {
  let shortenerService: ShortenerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ShortenerService],
    });

    shortenerService = TestBed.inject(ShortenerService);
    httpMock = TestBed.inject(HttpTestingController as Type<HttpTestingController>);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('postURL', () => {
    it('should return a shortener url', () => {
      // Arrange
      const mockShortener = {
        code: 'UKGY6_png',
        url: 'http://www.google.com',
        created_at: 1638269349,
      };

      // Act
      const ShortenerSubscription = shortenerService.saveURL('http://www.google.com');

      // Assert
      ShortenerSubscription.subscribe((shortener: any) => {
        expect(shortener.url).toEqual(mockShortener.url);
        expect(shortener.code).toBe(String);
        expect(shortener.created_at).toBe(Number);
      });
      httpMock.expectOne({}).flush(mockShortener);
    });
  });
});
