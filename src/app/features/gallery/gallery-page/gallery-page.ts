import { Component, computed, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

export interface GallerySpec {
  icon: string;
  labelKey: string;
  valueKey: string;
}

export interface GalleryExtraImage {
  imageUrl: string;
  altKey: string;
  captionKey?: string;
}

export interface GalleryProcessStep {
  imageUrl: string;
  altKey: string;
  titleKey: string;
  textKey: string;
}

export interface GalleryItem {
  id: string;
  titleKey: string;
  textKey: string;
  imageUrl: string;
  altKey: string;
  introKey?: string;
  afterTextImages?: GalleryExtraImage[];
  specs: GallerySpec[];
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
      introKey: 'GALLERY.ITEM_1_INTRO',
      imageUrl: 'images/organische-vijver.png',
      afterTextImages: [
        {
          imageUrl: 'images/organische-vijver-detail-1.png',
          altKey: 'GALLERY.ITEM_1_DETAIL_1_ALT',
          captionKey: 'GALLERY.ITEM_1_DETAIL_1_CAPTION',
        },
        {
          imageUrl: 'images/organische-vijver-detail-2.png',
          altKey: 'GALLERY.ITEM_1_DETAIL_2_ALT',
          captionKey: 'GALLERY.ITEM_1_DETAIL_2_CAPTION',
        },
      ],
      specs: [
        {
          icon: 'bi-geo-alt',
          labelKey: 'GALLERY.SPEC_SITE',
          valueKey: 'GALLERY.ITEM_1_LOCATION',
        },
        {
          icon: 'bi-bounding-box',
          labelKey: 'GALLERY.SPEC_AREA',
          valueKey: 'GALLERY.ITEM_1_AREA',
        },
        {
          icon: 'bi-layers',
          labelKey: 'GALLERY.SPEC_MATERIAL',
          valueKey: 'GALLERY.ITEM_1_MATERIAL',
        },
      ],
    },
    {
      id: 'gelaagde-watervalvijver',
      titleKey: 'GALLERY.ITEM_2_TITLE',
      textKey: 'GALLERY.ITEM_2_TEXT',
      altKey: 'GALLERY.ITEM_2_ALT',
      imageUrl: 'images/gelaagde-watervalvijver.png',
      specs: [
        {
          icon: 'bi-geo-alt',
          labelKey: 'GALLERY.SPEC_LOCATION',
          valueKey: 'GALLERY.ITEM_2_LOCATION',
        },
        {
          icon: 'bi-arrows-vertical',
          labelKey: 'GALLERY.SPEC_DEPTH',
          valueKey: 'GALLERY.ITEM_2_DEPTH',
        },
        {
          icon: 'bi-droplet',
          labelKey: 'GALLERY.SPEC_VOLUME',
          valueKey: 'GALLERY.ITEM_2_VOLUME',
        },
        {
          icon: 'bi-layers',
          labelKey: 'GALLERY.SPEC_MATERIAL',
          valueKey: 'GALLERY.ITEM_2_MATERIAL',
        },
        {
          icon: 'bi-lightning-charge',
          labelKey: 'GALLERY.SPEC_ENERGY',
          valueKey: 'GALLERY.ITEM_2_ENERGY',
        },
        {
          icon: 'bi-currency-euro',
          labelKey: 'GALLERY.SPEC_PRICE',
          valueKey: 'GALLERY.ITEM_2_PRICE',
        },
      ],
    },
  ]);

  readonly items = this.itemsSignal.asReadonly();
  readonly hasItems = computed(() => this.itemsSignal().length > 0);

  readonly processSteps: GalleryProcessStep[] = [
    {
      imageUrl: 'images/basin-build-step-1.png',
      altKey: 'GALLERY.PROCESS_STEP_1_ALT',
      titleKey: 'GALLERY.PROCESS_STEP_1_TITLE',
      textKey: 'GALLERY.PROCESS_STEP_1_TEXT',
    },
    {
      imageUrl: 'images/basin-build-step-2.png',
      altKey: 'GALLERY.PROCESS_STEP_2_ALT',
      titleKey: 'GALLERY.PROCESS_STEP_2_TITLE',
      textKey: 'GALLERY.PROCESS_STEP_2_TEXT',
    },
    {
      imageUrl: 'images/basin-build-step-3.png',
      altKey: 'GALLERY.PROCESS_STEP_3_ALT',
      titleKey: 'GALLERY.PROCESS_STEP_3_TITLE',
      textKey: 'GALLERY.PROCESS_STEP_3_TEXT',
    },
  ];
}
