import { Injectable, computed, signal } from '@angular/core';
import {
  COOKIE_CONSENT_STORAGE_KEY,
  CookieConsentChoice,
  CookieConsentState,
} from '../../models/cookie-consent.model';

@Injectable({ providedIn: 'root' })
export class CookieConsentService {
  private readonly stateSignal = signal<CookieConsentState>(this.readStoredState());

  readonly state = this.stateSignal.asReadonly();
  readonly showBanner = computed(() => this.stateSignal().choice === null);
  readonly isAccepted = computed(() => this.stateSignal().choice === 'accepted');

  acceptAll(): void {
    this.persist('accepted');
  }

  reject(): void {
    this.persist('rejected');
  }

  openSettings(): void {
    // Settings panel can be expanded later; for AVG compliance we treat
    // "Settings / Reject" as a non-acceptance path that keeps essential-only cookies.
    this.persist('rejected');
  }

  reset(): void {
    localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY);
    this.stateSignal.set({ choice: null, updatedAt: null });
  }

  private persist(choice: Exclude<CookieConsentChoice, null>): void {
    const next: CookieConsentState = {
      choice,
      updatedAt: new Date().toISOString(),
    };
    localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(next));
    this.stateSignal.set(next);
  }

  private readStoredState(): CookieConsentState {
    try {
      const raw = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
      if (!raw) {
        return { choice: null, updatedAt: null };
      }
      const parsed = JSON.parse(raw) as CookieConsentState;
      if (parsed.choice === 'accepted' || parsed.choice === 'rejected') {
        return parsed;
      }
    } catch {
      // Ignore malformed storage and fall back to prompting again.
    }
    return { choice: null, updatedAt: null };
  }
}
