import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card.component';
import { DesignUtilityModule } from 'src/app/appModules/design-utility.module';

const routes: Routes = [{ path: '', component: CardComponent }];

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, DesignUtilityModule, RouterModule.forChild(routes)],
})
export class CardModule {}
