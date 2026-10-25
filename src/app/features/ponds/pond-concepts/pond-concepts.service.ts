import { Injectable } from '@angular/core';
import { PondConcept, PondDetailContent } from '../../../core/models/pond-concept.model';

@Injectable({ providedIn: 'root' })
export class PondConceptsService {
  private readonly concepts: PondConcept[] = [
    {
      id: 'organische-natuurgetrouwe',
      titleKey: 'PONDS.ITEM_1_TITLE',
      textKey: 'PONDS.ITEM_1_TEXT',
      textAfterKey: 'PONDS.ITEM_1_TEXT_AFTER',
      altKey: 'PONDS.ITEM_1_ALT',
      imageUrl: 'images/organische-natuurgetrouwe-vijver.jpg',
      thesesTitleKey: 'PONDS.ITEM_1_THESES_TITLE',
      theses: [
        { titleKey: 'PONDS.ITEM_1_THESIS_1_TITLE', textKey: 'PONDS.ITEM_1_THESIS_1_TEXT' },
        { titleKey: 'PONDS.ITEM_1_THESIS_2_TITLE', textKey: 'PONDS.ITEM_1_THESIS_2_TEXT' },
        { titleKey: 'PONDS.ITEM_1_THESIS_3_TITLE', textKey: 'PONDS.ITEM_1_THESIS_3_TEXT' },
      ],
    },
    {
      id: 'koivijver',
      titleKey: 'PONDS.ITEM_2_TITLE',
      textKey: 'PONDS.ITEM_2_TEXT',
      textAfterKey: 'PONDS.ITEM_2_TEXT_AFTER',
      altKey: 'PONDS.ITEM_2_ALT',
      imageUrl: 'images/koivijver.png',
      cardImageUrl: 'images/koivijver-card.png',
      thesesTitleKey: 'PONDS.ITEM_2_THESES_TITLE',
      theses: [
        { titleKey: 'PONDS.ITEM_2_THESIS_1_TITLE', textKey: 'PONDS.ITEM_2_THESIS_1_TEXT' },
        { titleKey: 'PONDS.ITEM_2_THESIS_2_TITLE', textKey: 'PONDS.ITEM_2_THESIS_2_TEXT' },
        { titleKey: 'PONDS.ITEM_2_THESIS_3_TITLE', textKey: 'PONDS.ITEM_2_THESIS_3_TEXT' },
      ],
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
          textAfterKey: 'PONDS.ITEM_3A_TEXT_AFTER',
          altKey: 'PONDS.ITEM_3A_ALT',
          imageUrl: 'images/zwemvijver.jpg',
          thesesTitleKey: 'PONDS.ITEM_3A_THESES_TITLE',
          theses: [
            { titleKey: 'PONDS.ITEM_3A_THESIS_1_TITLE', textKey: 'PONDS.ITEM_3A_THESIS_1_TEXT' },
            { titleKey: 'PONDS.ITEM_3A_THESIS_2_TITLE', textKey: 'PONDS.ITEM_3A_THESIS_2_TEXT' },
            { titleKey: 'PONDS.ITEM_3A_THESIS_3_TITLE', textKey: 'PONDS.ITEM_3A_THESIS_3_TEXT' },
          ],
        },
        {
          id: 'boerderij',
          titleKey: 'PONDS.ITEM_3B_TITLE',
          textKey: 'PONDS.ITEM_3B_TEXT',
          textAfterKey: 'PONDS.ITEM_3B_TEXT_AFTER',
          altKey: 'PONDS.ITEM_3B_ALT',
          imageUrl: 'images/zwemvijver-forest.jpg',
          thesesTitleKey: 'PONDS.ITEM_3B_THESES_TITLE',
          theses: [
            { titleKey: 'PONDS.ITEM_3B_THESIS_1_TITLE', textKey: 'PONDS.ITEM_3B_THESIS_1_TEXT' },
            { titleKey: 'PONDS.ITEM_3B_THESIS_2_TITLE', textKey: 'PONDS.ITEM_3B_THESIS_2_TEXT' },
            { titleKey: 'PONDS.ITEM_3B_THESIS_3_TITLE', textKey: 'PONDS.ITEM_3B_THESIS_3_TEXT' },
          ],
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

    if (!concept.textKey) {
      return undefined;
    }

    return {
      id: concept.id,
      titleKey: concept.titleKey,
      textKey: concept.textKey,
      textAfterKey: concept.textAfterKey,
      altKey: concept.altKey,
      imageUrl: concept.imageUrl,
      thesesTitleKey: concept.thesesTitleKey,
      theses: concept.theses,
      depthKey: concept.depthKey,
      minSizeKey: concept.minSizeKey,
      volumeKey: concept.volumeKey,
      energyKey: concept.energyKey,
      pumpsKey: concept.pumpsKey,
      filtersKey: concept.filtersKey,
      lightingKey: concept.lightingKey,
      maintenanceKey: concept.maintenanceKey,
      priceKey: concept.priceKey,
    };
  }
}
