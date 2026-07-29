import { Routes } from '@angular/router';
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
      {
        path: 'equipment',
        loadComponent: () =>
          import('./features/equipment/equipment-page/equipment-page').then(
            (m) => m.EquipmentPage,
          ),
        title: 'ZenVijver · Apparatuur',
      },
      {
        path: 'materials',
        loadComponent: () =>
          import('./features/materials/materials-page/materials-page').then(
            (m) => m.MaterialsPage,
          ),
        title: 'ZenVijver · Materialen',
      },
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
