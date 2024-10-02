import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./get-neighbor/get-neighbor.module').then(
        (m) => m.GetNeighborModule,
      ),
  }
];
