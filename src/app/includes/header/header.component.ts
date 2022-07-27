import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cartItemCount!: number;
  num!: any;
  constructor(
    private desingUtilityService: DesignUtilityService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.desingUtilityService.cartCount.subscribe((res) => {
      this.cartItemCount = res;
    });
  }

  onLogout() {
    const data = {
      title: 'Log Out?',
      text: 'Do you want to logout?',
    };
    this.desingUtilityService.OpenPropt(data).subscribe((res) => {
      if (res) {
        this.route.navigate(['/']);
      }
    });
  }
}
