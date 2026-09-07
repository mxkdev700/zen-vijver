import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { map } from 'rxjs';
import { Button } from '../../../shared/components/button/button';
import { PondConceptsService } from '../pond-concepts/pond-concepts.service';

@Component({
  selector: 'zen-pond-hub-page',
  imports: [TranslatePipe, RouterLink, Button],
  templateUrl: './pond-hub-page.html',
  styleUrl: './pond-hub-page.scss',
})
export class PondHubPage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly pondConcepts = inject(PondConceptsService);

  private readonly conceptId = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('id') ?? '')),
    { initialValue: '' },
  );

  readonly concept = computed(() => this.pondConcepts.getById(this.conceptId()));

  readonly variants = computed(() => this.concept()?.variants ?? []);

  constructor() {
    effect(() => {
      const id = this.conceptId();
      const concept = this.pondConcepts.getById(id);
      if (id && (!concept || !concept.variants?.length)) {
        void this.router.navigateByUrl('/ponds');
      }
    });
  }
}
