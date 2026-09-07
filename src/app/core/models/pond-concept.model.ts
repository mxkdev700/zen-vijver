export interface PondDetailContent {
  id: string;
  titleKey: string;
  textKey: string;
  altKey: string;
  imageUrl: string;
  depthKey: string;
  minSizeKey: string;
  volumeKey: string;
  energyKey: string;
  pumpsKey: string;
  filtersKey: string;
  lightingKey: string;
  maintenanceKey: string;
  priceKey: string;
}

export interface PondConcept {
  id: string;
  titleKey: string;
  altKey: string;
  imageUrl: string;
  /** Present for concepts without variants (single detail page). */
  textKey?: string;
  depthKey?: string;
  minSizeKey?: string;
  volumeKey?: string;
  energyKey?: string;
  pumpsKey?: string;
  filtersKey?: string;
  lightingKey?: string;
  maintenanceKey?: string;
  priceKey?: string;
  /** When set, /ponds/:id shows a hub of tiles instead of a detail page. */
  variants?: PondDetailContent[];
}
