export type AppLanguage = 'nl' | 'en' | 'de';

export interface LanguageOption {
  code: AppLanguage;
  labelKey: string;
  nativeLabel: string;
  /** SVG flag path for the language switcher (emoji flags break on Windows). */
  flagSrc: string;
}

export const AVAILABLE_LANGUAGES: readonly LanguageOption[] = [
  {
    code: 'nl',
    labelKey: 'LANG.NL',
    nativeLabel: 'Nederlands',
    flagSrc: 'images/flags/nl.svg',
  },
  {
    code: 'en',
    labelKey: 'LANG.EN',
    nativeLabel: 'English',
    flagSrc: 'images/flags/gb.svg',
  },
  {
    code: 'de',
    labelKey: 'LANG.DE',
    nativeLabel: 'Deutsch',
    flagSrc: 'images/flags/de.svg',
  },
] as const;

export const DEFAULT_LANGUAGE: AppLanguage = 'nl';
export const LANGUAGE_STORAGE_KEY = 'zenvijver.lang';
