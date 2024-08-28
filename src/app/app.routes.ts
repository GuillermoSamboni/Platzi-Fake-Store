import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/pages/public/public-routes.routes').then(rp => rp.publicRoutes)
  }
];
