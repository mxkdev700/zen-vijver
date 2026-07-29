import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { map } from 'rxjs';
import { Button } from '../../../shared/components/button/button';
import { PondConceptsService } from '../pond-concepts/pond-concepts.service';

@Component({
  selector: 'zen-pond-detail-page',
  imports: [TranslatePipe, Button],
  templateUrl: './pond-detail-page.html',
  styleUrl: './pond-detail-page.scss',
})
export class PondDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly pondConcepts = inject(PondConceptsService);

  private readonly conceptId = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('id') ?? '')),
    { initialValue: '' },
  );

  readonly concept = computed(() => this.pondConcepts.getById(this.conceptId()));

  readonly specs = computed(() => {
    const item = this.concept();
    if (!item) {
      return [];
    }

    return [
      { icon: 'bi-arrows-vertical', labelKey: 'PONDS.SPEC_DEPTH', valueKey: item.depthKey },
      { icon: 'bi-rulers', labelKey: 'PONDS.SPEC_MIN_SIZE', valueKey: item.minSizeKey },
      { icon: 'bi-droplet', labelKey: 'PONDS.SPEC_VOLUME', valueKey: item.volumeKey },
      { icon: 'bi-lightning-charge', labelKey: 'PONDS.SPEC_ENERGY', valueKey: item.energyKey },
      { icon: 'bi-gear-wide-connected', labelKey: 'PONDS.SPEC_PUMPS', valueKey: item.pumpsKey },
      { icon: 'bi-funnel', labelKey: 'PONDS.SPEC_FILTERS', valueKey: item.filtersKey },
      { icon: 'bi-lightbulb', labelKey: 'PONDS.SPEC_LIGHTING', valueKey: item.lightingKey },
      { icon: 'bi-tools', labelKey: 'PONDS.SPEC_MAINTENANCE', valueKey: item.maintenanceKey },
      { icon: 'bi-currency-euro', labelKey: 'PONDS.SPEC_PRICE', valueKey: item.priceKey },
    ];
  });

  constructor() {
    effect(() => {
      const id = this.conceptId();
      if (id && !this.pondConcepts.getById(id)) {
        void this.router.navigateByUrl('/ponds');
      }
    });
  }
}
