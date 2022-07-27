import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { PromptComponent } from './prompt.component';

describe('PromptComponent', () => {
  let component: PromptComponent;
  let fixture: ComponentFixture<PromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromptComponent],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(PromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // beforeEach(() => {});

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
