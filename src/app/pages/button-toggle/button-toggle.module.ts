import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ButtonToggleComponent } from './button-toggle.component';

const routes: Routes = [{ path: '', component: ButtonToggleComponent }];

@NgModule({
  declarations: [],

  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ButtonToggleModule {}
