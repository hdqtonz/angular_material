import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from 'src/app/appModules/mat.module';
import { ButtonComponent } from '../button/button.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: ButtonComponent }];

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, MatModule, RouterModule.forChild(routes)],
})
export class ButtonModule {}
