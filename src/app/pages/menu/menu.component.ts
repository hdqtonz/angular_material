import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @ViewChild('secondMenuBtn')
  trigger!: MatMenuTrigger;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.someMethod();
    }, 3000);
  }

  someMethod() {
    this.trigger.openMenu();
  }
}
