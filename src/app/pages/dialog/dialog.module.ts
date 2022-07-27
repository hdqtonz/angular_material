import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DialogComponent } from './dialog.component';
import { DialogOneComponent } from './dialog-one/dialog-one.component';
import { DialogTwoComponent } from './dialog-two/dialog-two.component';
import { DialogThreeComponent } from './dialog-three/dialog-three.component';
import { DesignUtilityModule } from 'src/app/appModules/design-utility.module';

const routes: Routes = [{ path: '', component: DialogComponent }];

@NgModule({
  declarations: [
    DialogComponent,
    DialogOneComponent,
    DialogTwoComponent,
    DialogThreeComponent,
  ],
  imports: [CommonModule, DesignUtilityModule, RouterModule.forChild(routes)],
})
export class DialogModule {}
