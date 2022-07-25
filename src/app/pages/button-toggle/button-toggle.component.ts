import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss'],
})
export class ButtonToggleComponent implements OnInit {
  alertsEnabled!: boolean;
  constructor() {}
  fontStyleControl = new FormControl();
  fontStyle: any;

  ngOnInit(): void {}

  onSingleButtonToggle(myToggle: any) {
    // console.log(myToggle.checked);
  }

  onSeleteAlignMet(e: any) {
    // console.log(e.value);
  }

  onMultiSelectGroup(e: any) {}
}
