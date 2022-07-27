import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip.component';
import { RouterModule, Routes } from '@angular/router';
import { DesignUtilityModule } from 'src/app/appModules/design-utility.module';

const routes: Routes = [{ path: '', component: TooltipComponent }];

@NgModule({
  declarations: [TooltipComponent],
  imports: [CommonModule, DesignUtilityModule, RouterModule.forChild(routes)],
})
export class TooltipModule {}
