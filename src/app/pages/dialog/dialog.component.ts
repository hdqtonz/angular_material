import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
import { PromptComponent } from 'src/app/includes/utilities/popups/prompt/prompt.component';
import { DialogOneComponent } from './dialog-one/dialog-one.component';
import { DialogThreeComponent } from './dialog-three/dialog-three.component';
import { DialogTwoComponent } from './dialog-two/dialog-two.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private designUtilityService: DesignUtilityService
  ) {}

  ngOnInit(): void {}

  //-------- Example 1----------//
  openDialog() {
    this.dialog.open(DialogOneComponent, {
      // width: '100%',
      // minWidth: '500px',
      // maxWidth: '400px',
      // height: '100px',
      // minHeight: '500px',
      // maxHeight: '500px',
      // hasBackdrop: false,
      // disableClose: true,
      //**For More Opation Check The Document
    });
  }

  //--------- Example 2 ----------//
  openDialog2() {
    const dialogRef = this.dialog.open(DialogTwoComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  //-------- Example 3 ----------//
  animal!: string;
  name!: string;
  openDataDialog() {
    const dialogRef = this.dialog.open(DialogThreeComponent, {
      data: this.name,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.animal = result.value;
    });
  }

  //-------- Example 4 ----------//
  promptResult!: boolean;
  promptTitle!: string;
  promptText!: string;
  openPromptDialon() {
    const data = {
      title: this.promptTitle,
      text: this.promptText,
    };
    this.designUtilityService.OpenPropt(data).subscribe((res) => {
      console.log(res);
      this.promptResult = res;
    });
  }
}
