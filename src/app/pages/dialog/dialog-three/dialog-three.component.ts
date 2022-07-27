import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

providers: [
  { provide: MAT_DIALOG_DATA, useValue: {} },
  { provide: MatDialogRef, useValue: {} },
];

@Component({
  selector: 'app-dialog-three',
  templateUrl: './dialog-three.component.html',
  styleUrls: ['./dialog-three.component.scss'],
})
export class DialogThreeComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: MatDialogRef<any>) {}

  ngOnInit(): void {}
}
