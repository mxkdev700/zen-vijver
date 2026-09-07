import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
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
  private readonly translate = inject(TranslateService);
  private readonly pondConcepts = inject(PondConceptsService);

  private readonly conceptId = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('id') ?? '')),
    { initialValue: '' },
  );

  private readonly variantId = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('variantId'))),
    { initialValue: null as string | null },
  );

  readonly detail = computed(() =>
    this.pondConcepts.getDetail(this.conceptId(), this.variantId()),
  );

  readonly backLink = computed(() => {
    const variantId = this.variantId();
    const conceptId = this.conceptId();
    return variantId ? `/ponds/${conceptId}` : '/ponds';
  });

  readonly backLabelKey = computed(() =>
    this.variantId() ? 'PONDS.BACK_TO_VARIANTS' : 'PONDS.BACK',
  );

  readonly descriptionParagraphs = computed(() => {
    this.translate.currentLang();
    const item = this.detail();
    if (!item) {
      return [];
    }

    return this.translate
      .instant(item.textKey)
      .split(/\n\n+/)
      .map((part: string) => part.trim())
      .filter(Boolean);
  });

  readonly specs = computed(() => {
    const item = this.detail();
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
      const conceptId = this.conceptId();
      const variantId = this.variantId();
      if (!conceptId) {
        return;
      }

      if (this.pondConcepts.getDetail(conceptId, variantId)) {
        return;
      }

      if (this.pondConcepts.hasVariants(conceptId)) {
        void this.router.navigateByUrl(`/ponds/${conceptId}`);
        return;
      }

      void this.router.navigateByUrl('/ponds');
    });
  }
}
