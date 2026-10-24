import { Routes } from '@angular/router';
import { pondHasVariantsGuard } from './core/guards/pond-route.guards';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/home/home-page/home-page').then((m) => m.HomePage),
        title: 'ZenVijver',
      },
      {
        path: 'ponds',
        loadComponent: () =>
          import('./features/ponds/ponds-page/ponds-page').then((m) => m.PondsPage),
        title: 'ZenVijver · Vijverconcepten',
      },
      {
        path: 'ponds/:id/:variantId',
        loadComponent: () =>
          import('./features/ponds/pond-detail-page/pond-detail-page').then(
            (m) => m.PondDetailPage,
          ),
        title: 'ZenVijver · Vijverconcepten',
      },
      {
        path: 'ponds/:id',
        canMatch: [pondHasVariantsGuard],
        loadComponent: () =>
          import('./features/ponds/pond-hub-page/pond-hub-page').then((m) => m.PondHubPage),
        title: 'ZenVijver · Vijverconcepten',
      },
      {
        path: 'ponds/:id',
        loadComponent: () =>
          import('./features/ponds/pond-detail-page/pond-detail-page').then(
            (m) => m.PondDetailPage,
          ),
        title: 'ZenVijver · Vijverconcepten',
      },
      {
        path: 'gallery',
        loadComponent: () =>
          import('./features/gallery/gallery-page/gallery-page').then((m) => m.GalleryPage),
        title: 'ZenVijver · Ons Werk',
      },
      // Pages kept in codebase but temporarily unavailable via router.
      { path: 'equipment', redirectTo: '', pathMatch: 'full' },
      { path: 'materials', redirectTo: '', pathMatch: 'full' },
      {
        path: 'contact',
        loadComponent: () =>
          import('./features/contact/contact-page/contact-page').then((m) => m.ContactPage),
        title: 'ZenVijver · Contact',
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
