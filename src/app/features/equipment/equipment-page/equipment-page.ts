import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface EquipmentSection {
  id: string;
  icon: string;
  titleKey: string;
  textKey: string;
}

@Component({
  selector: 'zen-equipment-page',
  imports: [TranslatePipe],
  templateUrl: './equipment-page.html',
  styleUrl: './equipment-page.scss',
})
export class EquipmentPage {
  readonly sections: EquipmentSection[] = [
    {
      id: 'pumps',
      icon: 'bi-gear-wide-connected',
      titleKey: 'EQUIPMENT.PUMPS_TITLE',
      textKey: 'EQUIPMENT.PUMPS_TEXT',
    },
    {
      id: 'filters',
      icon: 'bi-funnel',
      titleKey: 'EQUIPMENT.FILTERS_TITLE',
      textKey: 'EQUIPMENT.FILTERS_TEXT',
    },
    {
      id: 'lighting',
      icon: 'bi-lightbulb',
      titleKey: 'EQUIPMENT.LIGHTING_TITLE',
      textKey: 'EQUIPMENT.LIGHTING_TEXT',
    },
    {
      id: 'care',
      icon: 'bi-droplet-half',
      titleKey: 'EQUIPMENT.CARE_TITLE',
      textKey: 'EQUIPMENT.CARE_TEXT',
    },
  ];
}
