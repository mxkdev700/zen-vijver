import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

type PhilosophyIcon = 'logo' | 'precision' | 'materials' | 'trust';

@Component({
  selector: 'zen-home-page',
  imports: [TranslatePipe],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  readonly principles: {
    icon: PhilosophyIcon;
    titleKey: string;
    textKey: string;
  }[] = [
    {
      icon: 'logo',
      titleKey: 'HOME.PHILOSOPHY_1_TITLE',
      textKey: 'HOME.PHILOSOPHY_1_TEXT',
    },
    {
      icon: 'precision',
      titleKey: 'HOME.PHILOSOPHY_2_TITLE',
      textKey: 'HOME.PHILOSOPHY_2_TEXT',
    },
    {
      icon: 'materials',
      titleKey: 'HOME.PHILOSOPHY_3_TITLE',
      textKey: 'HOME.PHILOSOPHY_3_TEXT',
    },
    {
      icon: 'trust',
      titleKey: 'HOME.PHILOSOPHY_4_TITLE',
      textKey: 'HOME.PHILOSOPHY_4_TEXT',
    },
  ];
}
