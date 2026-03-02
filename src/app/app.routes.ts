import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'recipe',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'recipe/:id',
    loadComponent: () =>
      import('./components/recipe-detail/recipe-detail.component')
        .then(m => m.RecipeDetailComponent),
  },
  {
    path: '',
    redirectTo: 'recipe',
    pathMatch: 'full',
  },
];
