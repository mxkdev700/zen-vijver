export interface PondThesis {
  titleKey: string;
  textKey: string;
}

export interface PondDetailContent {
  id: string;
  titleKey: string;
  textKey: string;
  textAfterKey?: string;
  altKey: string;
  imageUrl: string;
  thesesTitleKey?: string;
  theses?: PondThesis[];
}

export interface PondConcept {
  id: string;
  titleKey: string;
  altKey: string;
  imageUrl: string;
  /** Optional list-card image; falls back to imageUrl. */
  cardImageUrl?: string;
  /** Present for concepts without variants (single detail page). */
  textKey?: string;
  textAfterKey?: string;
  thesesTitleKey?: string;
  theses?: PondThesis[];
  /** When set, /ponds/:id shows a hub of tiles instead of a detail page. */
  variants?: PondDetailContent[];
}
