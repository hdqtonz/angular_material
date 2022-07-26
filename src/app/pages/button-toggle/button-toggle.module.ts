import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ButtonToggleComponent } from './button-toggle.component';
import { DesignUtilityModule } from 'src/app/appModules/design-utility.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: ButtonToggleComponent }];

@NgModule({
  declarations: [ButtonToggleComponent],

  imports: [CommonModule, DesignUtilityModule, RouterModule.forChild(routes)],
})
export class ButtonToggleModule {}
