import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';
import { DesignUtilityModule } from 'src/app/appModules/design-utility.module';

const routes: Routes = [{ path: '', component: MenuComponent }];

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, DesignUtilityModule, RouterModule.forChild(routes)],
})
export class MenuModule {}
