import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface MaterialSection {
  id: string;
  icon: string;
  titleKey: string;
  textKey: string;
}

@Component({
  selector: 'zen-materials-page',
  imports: [TranslatePipe],
  templateUrl: './materials-page.html',
  styleUrl: './materials-page.scss',
})
export class MaterialsPage {
  readonly sections: MaterialSection[] = [
    {
      id: 'stone',
      icon: 'bi-gem',
      titleKey: 'MATERIALS.STONE_TITLE',
      textKey: 'MATERIALS.STONE_TEXT',
    },
    {
      id: 'liner',
      icon: 'bi-layers',
      titleKey: 'MATERIALS.LINER_TITLE',
      textKey: 'MATERIALS.LINER_TEXT',
    },
    {
      id: 'geotextile',
      icon: 'bi-grid-3x3-gap',
      titleKey: 'MATERIALS.GEOTEXTILE_TITLE',
      textKey: 'MATERIALS.GEOTEXTILE_TEXT',
    },
    {
      id: 'cement',
      icon: 'bi-bricks',
      titleKey: 'MATERIALS.CEMENT_TITLE',
      textKey: 'MATERIALS.CEMENT_TEXT',
    },
    {
      id: 'decking',
      icon: 'bi-border-outer',
      titleKey: 'MATERIALS.DECKING_TITLE',
      textKey: 'MATERIALS.DECKING_TEXT',
    },
  ];
}
