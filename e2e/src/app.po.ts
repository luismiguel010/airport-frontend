import { browser, by, element } from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleMeteorologiaAerocivil(){
    return element(by.id('meteorologia')).getText;
  }
}
