/*
 * Use the Page Object pattern to define the page under test.
 * See docs/coding-guide/e2e-tests.md for more info.
 */

import { browser, element, by } from 'protractor';

export class HeaderPage {
  welcomeText = element(by.css('app-root ion-card-title'));

  getParagraphText() {
    return this.welcomeText.getText();
  }
}
