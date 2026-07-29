import { Injectable, computed, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
  AVAILABLE_LANGUAGES,
  AppLanguage,
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  LanguageOption,
} from '../../models/language.model';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly translate = inject(TranslateService);

  private readonly currentLanguageSignal = signal<AppLanguage>(DEFAULT_LANGUAGE);

  readonly languages = AVAILABLE_LANGUAGES;
  readonly currentLanguage = this.currentLanguageSignal.asReadonly();
  readonly currentOption = computed<LanguageOption>(() => {
    const code = this.currentLanguageSignal();
    return this.languages.find((lang) => lang.code === code) ?? this.languages[0];
  });

  init(): void {
    this.translate.addLangs([...this.languages.map((lang) => lang.code)]);
    const saved = this.readStoredLanguage();
    const initial = saved ?? DEFAULT_LANGUAGE;
    this.use(initial);
  }

  use(lang: AppLanguage): void {
    this.translate.use(lang);
    this.currentLanguageSignal.set(lang);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }

  private readStoredLanguage(): AppLanguage | null {
    const value = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (value === 'nl' || value === 'uk' || value === 'ru') {
      return value;
    }
    return null;
  }
}
