import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'button',
    loadChildren: () =>
      import('./pages/button/button.module').then((m) => m.ButtonModule),
  },
  {
    path: 'button-toggle',
    loadChildren: () =>
      import('./pages/button-toggle/button-toggle.module').then(
        (m) => m.ButtonToggleModule
      ),
  },
  {
    path: 'dynamic-color',
    loadChildren: () =>
      import('./pages/dynamic-colors/dynamic-colors.module').then(
        (m) => m.DynamicColorsModule
      ),
  },
  {
    path: 'elevation',
    loadChildren: () =>
      import('./pages/elevation/elevation.module').then(
        (m) => m.ElevationModule
      ),
  },
  {
    path: 'ripple',
    loadChildren: () =>
      import('./pages/ripple/ripple.module').then((m) => m.RippleModule),
  },
  {
    path: 'menu',
    loadChildren: () =>
      import('./pages/menu/menu.module').then((m) => m.MenuModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
