import { TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';

import { DesignUtilityService } from './design-utility.service';

describe('DesignUtilityService', () => {
  let service: DesignUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
    });
    service = TestBed.inject(DesignUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
