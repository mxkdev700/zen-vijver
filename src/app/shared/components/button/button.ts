import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  output,
} from '@angular/core';
import { Router } from '@angular/router';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'zen-button',
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Button {
  private readonly router = inject(Router);

  readonly variant = input<ButtonVariant>('primary');
  readonly size = input<ButtonSize>('md');
  readonly type = input<ButtonType>('button');
  readonly link = input<string | null>(null);
  readonly disabled = input(false, { transform: booleanAttribute });

  readonly pressed = output<MouseEvent>();

  readonly nativeType = computed<ButtonType>(() => (this.link() ? 'button' : this.type()));
  readonly role = computed(() => (this.link() ? 'link' : null));

  readonly classes = computed(() =>
    ['av-button', `av-button--${this.variant()}`, `av-button--${this.size()}`].join(' '),
  );

  onClick(event: MouseEvent): void {
    const href = this.link();
    if (href) {
      void this.router.navigateByUrl(href);
    }

    this.pressed.emit(event);
  }
}
