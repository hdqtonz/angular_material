import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { PromptComponent } from '../includes/utilities/popups/prompt/prompt.component';

@Injectable({
  providedIn: 'root',
})
export class DesignUtilityService {
  cartCount = new BehaviorSubject<number>(2);

  constructor(public dialog: MatDialog) {}

  //----------Open Prompt----------//
  OpenPropt(promptData: any) {
    const dialogRef = this.dialog.open(PromptComponent, {
      data: promptData,
    });

    return dialogRef.afterClosed();
  }
}
