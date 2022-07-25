import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DynamicColorsComponent } from './dynamic-colors.component';

const routes: Routes = [{ path: '', component: DynamicColorsComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DynamicColorsModule {}
