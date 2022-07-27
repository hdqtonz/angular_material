import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { DialogThreeComponent } from './dialog-three.component';

describe('DialogThreeComponent', () => {
  let component: DialogThreeComponent;
  let fixture: ComponentFixture<DialogThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogThreeComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogThreeComponent);
    console.log(fixture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
