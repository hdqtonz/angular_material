import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from './mat.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PromptComponent } from '../includes/utilities/popups/prompt/prompt.component';
import { HeaderComponent } from '../includes/header/header.component';
import { FooterComponent } from '../includes/footer/footer.component';

@NgModule({
  declarations: [PromptComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, MatModule, ReactiveFormsModule, FormsModule],
  exports: [
    PromptComponent,
    MatModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
  ],
})
export class DesignUtilityModule {}
