import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'recipes',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'recipes/:id',
    loadComponent: () =>
      import('./components/recipe-detail/recipe-detail.component')
        .then(m => m.RecipeDetailComponent),
  },
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full',
  },
];
