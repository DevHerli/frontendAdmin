import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {


  supportedLanguages = ['en','es'];
  defaultLanguage = 'es';

  constructor(private translate : TranslateService) { }


  getLanguage() {
    const userLanguage = this.translate.getBrowserLang();
    // return this.supportedLanguages.includes(userLanguage) ? userLanguage : this.defaultLanguage;
  }
}
