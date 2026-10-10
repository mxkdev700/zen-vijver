import { afterNextRender, Component, DestroyRef, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CookieBanner } from '../../shared/components/cookie-banner/cookie-banner';
import { Footer } from '../../shared/components/footer/footer';
import { Header } from '../../shared/components/header/header';

@Component({
  selector: 'zen-main-layout',
  imports: [RouterOutlet, Header, Footer, CookieBanner],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {
  private readonly destroyRef = inject(DestroyRef);

  readonly scrollY = signal(0);
  readonly pointerX = signal(0.5);
  readonly pointerY = signal(0.35);

  constructor() {
    afterNextRender(() => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduceMotion) {
        return;
      }

      let ticking = false;
      const onScroll = () => {
        if (ticking) {
          return;
        }
        ticking = true;
        requestAnimationFrame(() => {
          this.scrollY.set(window.scrollY);
          ticking = false;
        });
      };

      const onPointer = (event: PointerEvent) => {
        this.pointerX.set(event.clientX / window.innerWidth);
        this.pointerY.set(event.clientY / window.innerHeight);
      };

      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('pointermove', onPointer, { passive: true });
      this.destroyRef.onDestroy(() => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('pointermove', onPointer);
      });
    });
  }

  layerTransform(scrollFactor: number, pointerFactor = 0): string {
    const x = (this.pointerX() - 0.5) * pointerFactor * 36;
    const y = this.scrollY() * scrollFactor + (this.pointerY() - 0.35) * pointerFactor * 24;
    return `translate3d(${x}px, ${y}px, 0)`;
  }
}
