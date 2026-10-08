import { Routes } from '@angular/router';
 
export const routes: Routes = [
  {
    path: 'Formularios',
    children: [
      {
        path: 'usuarios',
        loadComponent: () =>
          import('./Formularios/usuarios/usuarios').then(
            (c) => c.Usuarios
          )
      },
      {
        path: 'zodiaco',
        loadComponent: () =>
          import('./Formularios/zodiaco/zodiaco').then(
            (c) => c.zodiaco
          )
      }
    ]
  },
 
  {
    path: 'escuela',
    children: [
      {
        path: 'lista-alumnos',
        loadComponent: () =>
          import('./escuela/lista-alumnos/lista-alumnos').then(
            (c) => c.ListaAlumnos
          )
      },
      {
         path: 'cinepolis',
        loadComponent: () =>
          import('./escuela/cinepolis/cinepolis').then(
            (c) => c.Cinepolis
          )
      }
    ]
  },
 
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
 
  {
    path: '**',
    redirectTo: 'admin'
  }
];
 