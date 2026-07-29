import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { AppLanguage } from '../../../core/models/language.model';
import { LanguageService } from '../../../core/services/language/language.service';

interface NavItem {
  path: string;
  labelKey: string;
}

@Component({
  selector: 'zen-header',
  imports: [RouterLink, RouterLinkActive, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly languageService = inject(LanguageService);

  readonly menuOpen = signal(false);
  readonly langOpen = signal(false);

  readonly languages = this.languageService.languages;
  readonly currentLanguage = this.languageService.currentLanguage;
  readonly currentOption = this.languageService.currentOption;

  readonly navItems: NavItem[] = [
    { path: '/', labelKey: 'NAV.HOME' },
    { path: '/ponds', labelKey: 'NAV.PONDS' },
    { path: '/gallery', labelKey: 'NAV.GALLERY' },
    { path: '/equipment', labelKey: 'NAV.EQUIPMENT' },
    { path: '/materials', labelKey: 'NAV.MATERIALS' },
    { path: '/contact', labelKey: 'NAV.CONTACT' },
  ];

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
    if (this.menuOpen()) {
      this.langOpen.set(false);
    }
  }

  closeMenu(): void {
    this.menuOpen.set(false);
    this.langOpen.set(false);
  }

  toggleLang(): void {
    this.langOpen.update((open) => !open);
  }

  selectLanguage(code: AppLanguage): void {
    this.languageService.use(code);
    this.langOpen.set(false);
  }
}
