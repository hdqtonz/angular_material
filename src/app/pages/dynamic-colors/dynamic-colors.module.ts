import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DynamicColorsComponent } from './dynamic-colors.component';
import { DesignUtilityModule } from 'src/app/appModules/design-utility.module';

const routes: Routes = [{ path: '', component: DynamicColorsComponent }];

@NgModule({
  declarations: [DynamicColorsComponent],
  imports: [CommonModule, DesignUtilityModule, RouterModule.forChild(routes)],
})
export class DynamicColorsModule {}
