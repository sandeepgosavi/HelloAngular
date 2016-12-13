import { browser, element, by } from 'protractor';

export class HelloAngularPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('t4c-login h1')).getText();
  }
}
