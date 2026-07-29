import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'zen-footer',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly year = new Date().getFullYear();

  readonly quickLinks = [
    { path: '/ponds', labelKey: 'NAV.PONDS' },
    { path: '/gallery', labelKey: 'NAV.GALLERY' },
    { path: '/equipment', labelKey: 'NAV.EQUIPMENT' },
    { path: '/materials', labelKey: 'NAV.MATERIALS' },
    { path: '/contact', labelKey: 'NAV.CONTACT' },
  ];
}
