import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent implements OnInit {
  count: number = 0;
  constructor(private designUtilityService: DesignUtilityService) {}

  ngOnInit(): void {
    this.designUtilityService.cartCount.subscribe((res) => (this.count = res));
  }

  onAdd() {
    this.count = this.count + 1;
    this.designUtilityService.cartCount.next(this.count);
  }

  onRemove() {
    if (this.count > 0) this.count = this.count - 1;
    this.designUtilityService.cartCount.next(this.count);
  }
}
