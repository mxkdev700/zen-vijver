import { Injectable } from '@angular/core';
import { PondConcept, PondDetailContent } from '../../../core/models/pond-concept.model';

const zwemvijverSpecs = {
  depthKey: 'PONDS.ITEM_3_DEPTH',
  minSizeKey: 'PONDS.ITEM_3_MIN_SIZE',
  volumeKey: 'PONDS.ITEM_3_VOLUME',
  energyKey: 'PONDS.ITEM_3_ENERGY',
  pumpsKey: 'PONDS.ITEM_3_PUMPS',
  filtersKey: 'PONDS.ITEM_3_FILTERS',
  lightingKey: 'PONDS.ITEM_3_LIGHTING',
  maintenanceKey: 'PONDS.ITEM_3_MAINTENANCE',
  priceKey: 'PONDS.ITEM_3_PRICE',
} as const;

@Injectable({ providedIn: 'root' })
export class PondConceptsService {
  private readonly concepts: PondConcept[] = [
    {
      id: 'organische-natuurgetrouwe',
      titleKey: 'PONDS.ITEM_1_TITLE',
      textKey: 'PONDS.ITEM_1_TEXT',
      altKey: 'PONDS.ITEM_1_ALT',
      imageUrl: 'images/organische-natuurgetrouwe-vijver.jpg',
      depthKey: 'PONDS.ITEM_1_DEPTH',
      minSizeKey: 'PONDS.ITEM_1_MIN_SIZE',
      volumeKey: 'PONDS.ITEM_1_VOLUME',
      energyKey: 'PONDS.ITEM_1_ENERGY',
      pumpsKey: 'PONDS.ITEM_1_PUMPS',
      filtersKey: 'PONDS.ITEM_1_FILTERS',
      lightingKey: 'PONDS.ITEM_1_LIGHTING',
      maintenanceKey: 'PONDS.ITEM_1_MAINTENANCE',
      priceKey: 'PONDS.ITEM_1_PRICE',
    },
    {
      id: 'koivijver',
      titleKey: 'PONDS.ITEM_2_TITLE',
      textKey: 'PONDS.ITEM_2_TEXT',
      altKey: 'PONDS.ITEM_2_ALT',
      imageUrl: 'images/koivijver.png',
      depthKey: 'PONDS.ITEM_2_DEPTH',
      minSizeKey: 'PONDS.ITEM_2_MIN_SIZE',
      volumeKey: 'PONDS.ITEM_2_VOLUME',
      energyKey: 'PONDS.ITEM_2_ENERGY',
      pumpsKey: 'PONDS.ITEM_2_PUMPS',
      filtersKey: 'PONDS.ITEM_2_FILTERS',
      lightingKey: 'PONDS.ITEM_2_LIGHTING',
      maintenanceKey: 'PONDS.ITEM_2_MAINTENANCE',
      priceKey: 'PONDS.ITEM_2_PRICE',
    },
    {
      id: 'zwemvijver',
      titleKey: 'PONDS.ITEM_3_TITLE',
      altKey: 'PONDS.ITEM_3_ALT',
      imageUrl: 'images/zwemvijver.jpg',
      variants: [
        {
          id: 'tuin',
          titleKey: 'PONDS.ITEM_3A_TITLE',
          textKey: 'PONDS.ITEM_3A_TEXT',
          altKey: 'PONDS.ITEM_3A_ALT',
          imageUrl: 'images/zwemvijver.jpg',
          ...zwemvijverSpecs,
        },
        {
          id: 'boerderij',
          titleKey: 'PONDS.ITEM_3B_TITLE',
          textKey: 'PONDS.ITEM_3B_TEXT',
          altKey: 'PONDS.ITEM_3B_ALT',
          imageUrl: 'images/zwemvijver-forest.jpg',
          ...zwemvijverSpecs,
        },
      ],
    },
  ];

  getAll(): PondConcept[] {
    return this.concepts;
  }

  getById(id: string): PondConcept | undefined {
    return this.concepts.find((concept) => concept.id === id);
  }

  hasVariants(id: string): boolean {
    return (this.getById(id)?.variants?.length ?? 0) > 0;
  }

  getDetail(conceptId: string, variantId?: string | null): PondDetailContent | undefined {
    const concept = this.getById(conceptId);
    if (!concept) {
      return undefined;
    }

    if (variantId) {
      return concept.variants?.find((variant) => variant.id === variantId);
    }

    if (concept.variants?.length) {
      return undefined;
    }

    if (!concept.textKey || !concept.depthKey) {
      return undefined;
    }

    return {
      id: concept.id,
      titleKey: concept.titleKey,
      textKey: concept.textKey,
      altKey: concept.altKey,
      imageUrl: concept.imageUrl,
      depthKey: concept.depthKey,
      minSizeKey: concept.minSizeKey!,
      volumeKey: concept.volumeKey!,
      energyKey: concept.energyKey!,
      pumpsKey: concept.pumpsKey!,
      filtersKey: concept.filtersKey!,
      lightingKey: concept.lightingKey!,
      maintenanceKey: concept.maintenanceKey!,
      priceKey: concept.priceKey!,
    };
  }
}
