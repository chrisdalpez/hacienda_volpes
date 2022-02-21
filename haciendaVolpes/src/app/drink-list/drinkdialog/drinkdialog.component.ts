import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-drinkdialog',
  templateUrl: './drinkdialog.component.html',
  styleUrls: ['./drinkdialog.component.css']
})
export class DrinkdialogComponent implements OnInit {

  private backupTask: Partial<Task> = { ...this.data.task };

  constructor(
    public dialogRef: MatDialogRef<DrinkdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DrinkDialogData
  ) { }

  cancel(): void {
    this.data.task.title = this.backupDrink.title;
    this.data.task.description = this.backupTask.description;
    this.dialogRef.close(this.data);
  }

  ngOnInit(): void {
  }

}
