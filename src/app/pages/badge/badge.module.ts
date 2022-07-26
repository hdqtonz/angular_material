import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BadgeComponent } from './badge.component';
import { DesignUtilityModule } from 'src/app/appModules/design-utility.module';

const routes: Routes = [{ path: '', component: BadgeComponent }];

@NgModule({
  declarations: [BadgeComponent],
  imports: [CommonModule, DesignUtilityModule, RouterModule.forChild(routes)],
})
export class BadgeModule {}
