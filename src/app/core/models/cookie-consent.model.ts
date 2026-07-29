export type CookieConsentChoice = 'accepted' | 'rejected' | null;

export interface CookieConsentState {
  choice: CookieConsentChoice;
  updatedAt: string | null;
}

export const COOKIE_CONSENT_STORAGE_KEY = 'zenvijver.cookieConsent';
