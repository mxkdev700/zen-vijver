import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { QuoteForm } from '../quote-form/quote-form';

@Component({
  selector: 'zen-contact-page',
  imports: [TranslatePipe, QuoteForm],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss',
})
export class ContactPage {}
