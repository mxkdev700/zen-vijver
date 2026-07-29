export type AppLanguage = 'nl' | 'uk' | 'ru';

export interface LanguageOption {
  code: AppLanguage;
  labelKey: string;
  nativeLabel: string;
}

export const AVAILABLE_LANGUAGES: readonly LanguageOption[] = [
  { code: 'nl', labelKey: 'LANG.NL', nativeLabel: 'Nederlands' },
  { code: 'uk', labelKey: 'LANG.UK', nativeLabel: 'Українська' },
  { code: 'ru', labelKey: 'LANG.RU', nativeLabel: 'Русский' },
] as const;

export const DEFAULT_LANGUAGE: AppLanguage = 'nl';
export const LANGUAGE_STORAGE_KEY = 'zenvijver.lang';
