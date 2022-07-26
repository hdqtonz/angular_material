import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DialogComponent } from './dialog.component';
import { DialogOneComponent } from './dialog-one/dialog-one.component';
import { DialogTwoComponent } from './dialog-two/dialog-two.component';
import { DesignUtilityModule } from 'src/app/appModules/design-utility.module';
import { FormsModule } from '@angular/forms';
import { DialogThreeComponent } from './dialog-three/dialog-three.component';

const routes: Routes = [{ path: '', component: DialogComponent }];

@NgModule({
  declarations: [DialogComponent, DialogOneComponent, DialogTwoComponent, DialogThreeComponent],
  imports: [CommonModule, DesignUtilityModule, RouterModule.forChild(routes)],
})
export class DialogModule {}
