import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

import { MatModule } from 'src/app/appModules/mat.module';

const routes: Routes = [{ path: '', component: MainComponent }];

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MatModule, RouterModule.forChild(routes)],
})
export class MainModule {}
