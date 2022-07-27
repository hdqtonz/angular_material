import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  {
    path: 'badge',
    loadChildren: () =>
      import('./pages/badge/badge.module').then((m) => m.BadgeModule),
  },
  {
    path: 'dialog',
    loadChildren: () =>
      import('./pages/dialog/dialog.module').then((m) => m.DialogModule),
  },
  {
    path: 'cards',
    loadChildren: () =>
      import('./pages/card/card.module').then((m) => m.CardModule),
  },
  {
    path: 'tooltip',
    loadChildren: () =>
      import('./pages/tooltip/tooltip.module').then((m) => m.TooltipModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
