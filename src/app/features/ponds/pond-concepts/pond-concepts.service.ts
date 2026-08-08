import { Injectable } from '@angular/core';
import { PondConcept } from '../../../core/models/pond-concept.model';

@Injectable({ providedIn: 'root' })
export class PondConceptsService {
  private readonly concepts: PondConcept[] = [
    {
      id: 'organische-natuurgetrouwe',
      titleKey: 'PONDS.ITEM_1_TITLE',
      textKey: 'PONDS.ITEM_1_TEXT',
      altKey: 'PONDS.ITEM_1_ALT',
      imageUrl: 'images/organische-natuurgetrouwe-vijver.png',
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
      textKey: 'PONDS.ITEM_3_TEXT',
      altKey: 'PONDS.ITEM_3_ALT',
      imageUrl: 'images/zwemvijver.png',
      depthKey: 'PONDS.ITEM_3_DEPTH',
      minSizeKey: 'PONDS.ITEM_3_MIN_SIZE',
      volumeKey: 'PONDS.ITEM_3_VOLUME',
      energyKey: 'PONDS.ITEM_3_ENERGY',
      pumpsKey: 'PONDS.ITEM_3_PUMPS',
      filtersKey: 'PONDS.ITEM_3_FILTERS',
      lightingKey: 'PONDS.ITEM_3_LIGHTING',
      maintenanceKey: 'PONDS.ITEM_3_MAINTENANCE',
      priceKey: 'PONDS.ITEM_3_PRICE',
    },
  ];

  getAll(): PondConcept[] {
    return this.concepts;
  }

  getById(id: string): PondConcept | undefined {
    return this.concepts.find((concept) => concept.id === id);
  }
}
