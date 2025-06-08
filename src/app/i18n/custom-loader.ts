import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import fr from '../../assets/i18n/fr';

const translations = {
  fr
};

export class CustomTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return of(translations[lang as keyof typeof translations]);
  }
}
