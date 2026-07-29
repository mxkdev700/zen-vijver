import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { CookieConsentService } from '../../../core/services/cookie-consent/cookie-consent.service';
import { Button } from '../button/button';

@Component({
  selector: 'zen-cookie-banner',
  imports: [TranslatePipe, Button],
  templateUrl: './cookie-banner.html',
  styleUrl: './cookie-banner.scss',
})
export class CookieBanner {
  private readonly cookieConsent = inject(CookieConsentService);

  readonly visible = this.cookieConsent.showBanner;

  acceptAll(): void {
    this.cookieConsent.acceptAll();
  }

  reject(): void {
    this.cookieConsent.reject();
  }

  openSettings(): void {
    this.cookieConsent.openSettings();
  }
}
