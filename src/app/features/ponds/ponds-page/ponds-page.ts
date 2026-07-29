import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { PondConceptsService } from '../pond-concepts/pond-concepts.service';

@Component({
  selector: 'zen-ponds-page',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './ponds-page.html',
  styleUrl: './ponds-page.scss',
})
export class PondsPage {
  private readonly pondConcepts = inject(PondConceptsService);
  readonly concepts = this.pondConcepts.getAll();
}
