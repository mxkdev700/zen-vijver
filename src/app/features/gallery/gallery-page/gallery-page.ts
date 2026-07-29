import { Component, computed, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

export interface GalleryItem {
  id: string;
  titleKey: string;
  textKey: string;
  imageUrl: string;
  altKey: string;
  locationKey: string;
  depthKey: string;
  volumeKey: string;
  materialKey: string;
  energyKey: string;
  priceKey: string;
}

@Component({
  selector: 'zen-gallery-page',
  imports: [TranslatePipe],
  templateUrl: './gallery-page.html',
  styleUrl: './gallery-page.scss',
})
export class GalleryPage {
  private readonly itemsSignal = signal<GalleryItem[]>([
    {
      id: 'organische-vijver',
      titleKey: 'GALLERY.ITEM_1_TITLE',
      textKey: 'GALLERY.ITEM_1_TEXT',
      altKey: 'GALLERY.ITEM_1_ALT',
      imageUrl: '/images/organische-vijver.png',
      locationKey: 'GALLERY.ITEM_1_LOCATION',
      depthKey: 'GALLERY.ITEM_1_DEPTH',
      volumeKey: 'GALLERY.ITEM_1_VOLUME',
      materialKey: 'GALLERY.ITEM_1_MATERIAL',
      energyKey: 'GALLERY.ITEM_1_ENERGY',
      priceKey: 'GALLERY.ITEM_1_PRICE',
    },
    {
      id: 'gelaagde-watervalvijver',
      titleKey: 'GALLERY.ITEM_2_TITLE',
      textKey: 'GALLERY.ITEM_2_TEXT',
      altKey: 'GALLERY.ITEM_2_ALT',
      imageUrl: '/images/gelaagde-watervalvijver.png',
      locationKey: 'GALLERY.ITEM_2_LOCATION',
      depthKey: 'GALLERY.ITEM_2_DEPTH',
      volumeKey: 'GALLERY.ITEM_2_VOLUME',
      materialKey: 'GALLERY.ITEM_2_MATERIAL',
      energyKey: 'GALLERY.ITEM_2_ENERGY',
      priceKey: 'GALLERY.ITEM_2_PRICE',
    },
  ]);

  readonly items = this.itemsSignal.asReadonly();
  readonly hasItems = computed(() => this.itemsSignal().length > 0);

  specsFor(item: GalleryItem) {
    return [
      { icon: 'bi-geo-alt', labelKey: 'GALLERY.SPEC_LOCATION', valueKey: item.locationKey },
      { icon: 'bi-arrows-vertical', labelKey: 'GALLERY.SPEC_DEPTH', valueKey: item.depthKey },
      { icon: 'bi-droplet', labelKey: 'GALLERY.SPEC_VOLUME', valueKey: item.volumeKey },
      { icon: 'bi-layers', labelKey: 'GALLERY.SPEC_MATERIAL', valueKey: item.materialKey },
      { icon: 'bi-lightning-charge', labelKey: 'GALLERY.SPEC_ENERGY', valueKey: item.energyKey },
      { icon: 'bi-currency-euro', labelKey: 'GALLERY.SPEC_PRICE', valueKey: item.priceKey },
    ];
  }
}
